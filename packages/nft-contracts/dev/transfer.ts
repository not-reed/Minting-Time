import { PrivateKeyWallet } from "@alephium/web3-wallet";
import { NodeProvider, ONE_ALPH, ALPH_TOKEN_ID } from "@alephium/web3";
import { mintToken, transfer } from "@repo/web3/src/test";
import config from "../alephium.config";

const NETWORK = "devnet";

const signer = new PrivateKeyWallet({
	privateKey: config.networks[NETWORK].privateKeys[0],
	nodeProvider: new NodeProvider(config.networks[NETWORK].nodeUrl), // only devnet
});

// bun dev/transfer.ts <alph account>
await transfer(signer, Bun.argv[2], ALPH_TOKEN_ID, 1000n * ONE_ALPH);

// await mintToken(Bun.argv[2], 1_000_000n * ONE_ALPH);
