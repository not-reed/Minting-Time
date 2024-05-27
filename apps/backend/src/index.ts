import { Hono } from "hono";
import { NFT, NFTCollection, loadDeployments } from "@repo/nft-contracts";
import {
	web3,
	NodeProvider,
	hexToString,
	addressFromContractId,
} from "@alephium/web3";
import { cors } from "hono/cors";

const NETWORK = "devnet";
const NODE_URL = "http://127.0.0.1:22973";

// devnet
web3.setCurrentNodeProvider(NODE_URL);
const nodeProvider = new NodeProvider(NODE_URL);

const deployments = loadDeployments(NETWORK);

function formatClock(clock: ClockNFT) {
	return {
		address: clock.address,
		id: clock.id,
		index: clock.index,
		minter: clock.minter,
		metadata: clock.metadata,
	};
}

interface MetaData {
	image: `data:image/svg+xml;base64,${string}`;
	name: string;
	attributes: Array<{ trait_type: string; value: string }>;
}
interface ClockNFT {
	address: string;
	id: string;
	index: `${number}`;
	minter: string;
	metadata: MetaData;
}
// local cache
const tokens = new Map<string, ClockNFT>();

// subscribe to mint events, and cache locally
NFTCollection.at(
	deployments.contracts.NFTCollection.contractInstance.address,
).subscribeMintEvent(
	{
		pollingInterval: 1_000, /// every second in dev, can be increased in prod, not so needed for realtime
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
		},
		errorCallback: async (error) => {
			console.error("Something went wrong poling the collection events");
		},
	},
	0,
);

const app = new Hono()
	.use("/api/*", cors())
	.get("/api/balances/:address", async (c) => {
		const address = c.req.param("address");
		const balances =
			await nodeProvider.addresses.getAddressesAddressBalance(address);

		const clocks = balances.tokenBalances?.filter((i) => tokens.has(i.id));
		if (!clocks || !clocks.length) {
			return c.json([] as ReturnType<typeof formatClock>[]);
		}

		// const nfts = await Promise.all(
		// 	clocks.map((a) => {
		// 		const clock = tokens.get(cur.id);

		// 		// if need to refetch times
		// 		// const nftState = hexToString(
		// 		// 	await NFT.at(clock.address)
		// 		// 		.methods.getTokenUri()
		// 		// 		.then((a) => a.returns),
		// 		// );
		// 		// return {
		// 		// 	address: clock.address,
		// 		// 	id: clock.id,

		// 		// 	minter: clock.minter,
		// 		// 	metadata: JSON.parse(
		// 		// 		nftState.replace("data:application/json;utf8,", ""),
		// 		// 	),
		// 		// };
		// 	}, [] as ClockNFT[]),
		// );

		const processed = clocks.filter((a) => tokens.has(a.id));

		const results = [] as ReturnType<typeof formatClock>[];
		for (const cur of processed) {
			const clock = tokens.get(cur.id);
			if (clock) {
				results.push(formatClock(clock));
			}
		}

		return c.json(results);
	})
	.get("/api/all", async (c) => {
		return c.json({
			address: deployments.contracts.NFTCollection.contractInstance.address,
			contractId:
				deployments.contracts.NFTCollection.contractInstance.contractId,
			totalSupply: tokens.size,
			nfts: Array.from(tokens.values()),
		});
	});

export type BalanceApiRoute = typeof app;
export default {
	port: 3001,
	fetch: app.fetch,
};
