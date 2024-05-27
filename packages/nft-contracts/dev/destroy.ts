import { Destroy } from "../artifacts/ts";
import { PrivateKeyWallet } from "@alephium/web3-wallet";
import { testPrivateKey } from "@alephium/web3-test";
import { NodeProvider, ONE_ALPH } from "@alephium/web3";
import { loadDeployments } from "artifacts/ts/deployments";
import config from "../alephium.config";

const NETWORK: "devnet" | "testnet" | "mainnet" = "devnet";

const deployments = loadDeployments(NETWORK);

const signer = new PrivateKeyWallet({
	privateKey: testPrivateKey,
	nodeProvider: new NodeProvider(config.networks[NETWORK].nodeUrl),
});

await Destroy.execute(signer, {
	initialFields: {
		nftCollectionId:
			deployments.contracts.NFTCollection.contractInstance.contractId,
	},
	attoAlphAmount: ONE_ALPH,
});
