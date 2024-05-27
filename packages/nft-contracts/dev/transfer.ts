import { PrivateKeyWallet } from "@alephium/web3-wallet";
import { testPrivateKey } from "@alephium/web3-test";
import { NodeProvider, ONE_ALPH, ALPH_TOKEN_ID } from "@alephium/web3";
import { transfer } from "@repo/web3/src/test";
import config from "../alephium.config";

const signer = new PrivateKeyWallet({
	privateKey: testPrivateKey,
	nodeProvider: new NodeProvider(config.networks.devnet.nodeUrl), // only devnet
});

// bun dev/transfer.ts <alph account>
await transfer(signer, Bun.argv[2], ALPH_TOKEN_ID, 1000n * ONE_ALPH);
