import { loadDeployments } from "@repo/nft-contracts";

// export const deployments = loadDeployments("devnet");
// export const API_URL = "http://localhost:3001";

export const deployments = loadDeployments("testnet");
export const API_URL = "https://minting-time-api.fly.dev/";
