import { MintNFT } from "../artifacts/ts";
import { PrivateKeyWallet } from "@alephium/web3-wallet";
import { testPrivateKey } from "@alephium/web3-test";
import { NodeProvider, ONE_ALPH, DUST_AMOUNT } from "@alephium/web3";
import { loadDeployments } from "artifacts/ts/deployments";
import config from "../alephium.config";

const NETWORK: "devnet" | "testnet" = "devnet";

const deployments = loadDeployments(NETWORK);

const signer = new PrivateKeyWallet({
	privateKey: testPrivateKey,
	nodeProvider: new NodeProvider(config.networks[NETWORK].nodeUrl),
});

const wait = async (ms: number) => new Promise((r) => setTimeout(r, ms));

// auto mints 377 NFTs - BE CAREFUL
for (let i = 0; i < 377; i++) {
	await MintNFT.execute(signer, {
		initialFields: {
			nftCollectionId:
				deployments.contracts.NFTCollection.contractInstance.contractId,
		},
		attoAlphAmount: ONE_ALPH * 5n + 100000000000000000n + DUST_AMOUNT,
	});

	console.log(`Minted NFT ${i}. Pausing for 1 second`);

	await wait(1000);
}
