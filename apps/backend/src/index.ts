import { Hono } from "hono";
import { NFT, NFTCollection, loadDeployments } from "@repo/nft-contracts";
import {
	web3,
	NodeProvider,
	hexToString,
	addressFromContractId,
} from "@alephium/web3";
import { cors } from "hono/cors";

// const NETWORK = "devnet";
// const NODE_URL = "http://127.0.0.1:22973";

const NETWORK = "testnet";
const NODE_URL = "https://node.testnet.alephium.org";

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
		metadata: {
			name: decodeURIComponent(clock.metadata.name),
			attributes: clock.metadata.attributes,
			image: clock.metadata.image,
		},
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
		pollingInterval: 5_000, /// every second in dev, can be increased in prod, not so needed for realtime
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

		const processed = clocks.filter((a) => tokens.has(a.id));

		const nfts = await Promise.all(
			processed.map(async (a) => {
				const clock = tokens.get(a.id);

				if (!clock) {
					// won't happen, but required to check for typescript
					return {
						address: "",
						id: "",
						minter: "",
						metadata: {
							image: "data:image/svg+xml;base64,",
							name: "",
							attributes: [],
						} satisfies MetaData,
					};
				}

				// if need to refetch times
				const nftState = hexToString(
					await NFT.at(clock.address)
						.methods.getTokenUri()
						.then((a) => a.returns),
				);
				return formatClock({
					address: clock.address,
					id: clock.id,
					index: clock.index,
					minter: clock.minter,
					metadata: JSON.parse(
						nftState.replace("data:application/json;utf8,", ""),
					) satisfies MetaData,
				});
			}, []),
		);

		return c.json(nfts);
	})
	.get("/api/all", async (c) => {
		return c.json({
			address: deployments.contracts.NFTCollection.contractInstance.address,
			contractId:
				deployments.contracts.NFTCollection.contractInstance.contractId,
			totalSupply: tokens.size,
			nfts: Array.from(tokens.values()).map(formatClock),
		});
	});

export type BalanceApiRoute = typeof app;
export default {
	port: 3001,
	fetch: app.fetch,
};
