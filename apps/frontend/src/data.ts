import { loadDeployments } from "@repo/nft-contracts";

export const NETWORK = "mainnet";
export const deployments = loadDeployments(NETWORK);
export const API_URL = {
	devnet: "http://localhost:3001",
	testnet: "https://minting-time-api.fly.dev/",
	mainnet: "https://minting-time-api.fly.dev/",
}[NETWORK];
