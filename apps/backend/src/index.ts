import { Hono } from "hono";
import { NFT, NFTCollection, loadDeployments } from "@repo/nft-contracts";
import {
	web3,
	NodeProvider,
	hexToString,
	addressFromContractId,
} from "@alephium/web3";
import { cors } from "hono/cors";
import config from "./config";
import type { ClockNFT } from "./interfaces";

// web3 node connections
const deployments = loadDeployments(config.network);
const nodeProvider = new NodeProvider(config.nodeUrl);
web3.setCurrentNodeProvider(nodeProvider);

// local cache
const tokens = new Map<string, ClockNFT>();

// subscribe to mint events, and cache locally
const sub = NFTCollection.at(
	deployments.contracts.NFTCollection.contractInstance.address,
).subscribeMintEvent(
	{
		pollingInterval: 15_000, /// every second in dev, can be increased in prod, not so needed for realtime
		messageCallback: async (event) => {
			const { nft, index, minter } = event.fields;
			const nftState = hexToString(
				await NFT.at(addressFromContractId(nft))
					.methods.getTokenUri()
					.then((a) => a.returns),
			);
			tokens.set(nft, {
				address: addressFromContractId(nft),
				id: nft,
				index: index.toString() as `${number}`,
				minter: minter,
				metadata: JSON.parse(
					nftState.replace("data:application/json;utf8,", ""),
				),
			});

			if (tokens.size >= config.totalSupply) {
				sub.unsubscribe();
				console.log(
					"All tokens have been indexed. Unsubscribing from mint events",
				);
			}
		},
		errorCallback: async (error) => {
			console.error("Something went wrong polling the collection events");
			console.log(error);
		},
	},
	0,
);

const app = new Hono()
	.use("/api/*", cors())
	.get("/api/balances/:address", async (c) => {
		const address = c.req.param("address");

		// get all users token balances
		const balances =
			await nodeProvider.addresses.getAddressesAddressBalance(address);

		// filter to only the known clocks
		const processed = balances.tokenBalances
			?.map((a) => tokens.get(a.id) || null)
			.filter((a): a is ClockNFT => Boolean(a));

		if (!processed || !processed.length) {
			return c.json([]);
		}

		// refetch all tokens metadata from onchain
		const nfts = await Promise.all(
			processed.map(async (clock) => {
				// all data is contained within tokenUri,
				// so refetch this to get latest generated image
				const nftState = hexToString(
					await NFT.at(clock.address)
						.methods.getTokenUri()
						.then((a) => a.returns),
				);

				// mutates local state/cache also
				clock.metadata = JSON.parse(
					nftState.replace("data:application/json;utf8,", ""),
				);

				return clock;
			}, []),
		);

		return c.json(nfts);
	})
	.get("/api/all", async (c) => {
		// simply return all from local cache
		// images may be out of date, but acceptable
		// for the current purposes at least
		return c.json({
			address: deployments.contracts.NFTCollection.contractInstance.address,
			contractId:
				deployments.contracts.NFTCollection.contractInstance.contractId,
			totalSupply: tokens.size,
			nfts: Array.from(tokens.values()).sort(
				(a, b) => Number(a.index) - Number(b.index),
			),
		});
	});

// Types for the front end
export type BalanceApiRoute = typeof app;

// custom port (3001)
export default {
	port: 3001,
	fetch: app.fetch,
};
