import { parseArgs } from "node:util";

type NETWORKS = "devnet" | "testnet" | "mainnet";

const DEFAULT_NETWORKS = ["devnet"] as const;

export const validateNetwork = <
	K extends readonly NETWORKS[],
	T extends K[number],
>(
	networks?: K,
): T => {
	const networks_ = (networks as K) ?? DEFAULT_NETWORKS;

	const network = parseArgs({
		args: process.argv.slice(2),
		strict: true,
		options: {
			network: { type: "string", default: DEFAULT_NETWORKS[0], short: "n" },
		},
	}).values.network;

	const isValid = (network: string | undefined): network is T =>
		Boolean(network) && networks_.includes(network as T);

	if (!isValid(network)) {
		console.warn(`Invalid network, defaulting to ${DEFAULT_NETWORKS[0]}`);
		return DEFAULT_NETWORKS[0] as T;
	}

	return network;
};
