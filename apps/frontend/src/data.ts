import { loadDeployments } from "@repo/nft-contracts";

// export const deployments = loadDeployments("devnet");
// export const API_URL = "http://localhost:3001";

export const NETWORK = "devnet";
export const deployments = loadDeployments(NETWORK);
export const API_URL = {
	devnet: "http://localhost:3001",
	testnet: "https://minting-time-api.fly.dev/",
}[NETWORK];
