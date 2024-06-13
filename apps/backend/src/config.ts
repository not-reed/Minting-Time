import { z } from "zod";

const { NETWORK, DEVNET_NODE_URL, TESTNET_NODE_URL, MAINNET_NODE_URL } =
	process.env;

const network = NETWORK || "mainnet";
const nodeUrl = {
	devnet: DEVNET_NODE_URL || "http://127.0.0.1:22973",
	testnet: TESTNET_NODE_URL || "https://node.testnet.alephium.org",
	mainnet: MAINNET_NODE_URL || "https://node.mainnet.alephium.org",
}[network];
const totalSupply = 377 as const;

const schema = z.object({
	// that has a name property that's a string
	network: z
		.union([z.literal("devnet"), z.literal("testnet"), z.literal("mainnet")])
		.default("mainnet"),

	// an age property that's a number
	// and must be 18 or higher
	nodeUrl: z.string().url(),

	// and an optional string email property that must be
	// a valid email
	totalSupply: z.number().default(totalSupply),
});

export default schema.parse({
	network,
	nodeUrl,
	totalSupply,
});
