import { Destroy } from "../artifacts/ts";
import { PrivateKeyWallet } from "@alephium/web3-wallet";
import { NodeProvider, ONE_ALPH } from "@alephium/web3";
import { loadDeployments } from "artifacts/ts/deployments";
import config from "../alephium.config";
import { validateNetwork } from "./utils";

const NETWORK = validateNetwork(["devnet", "testnet"]);

const deployments = loadDeployments(NETWORK);

const signer = new PrivateKeyWallet({
	privateKey: config.networks[NETWORK].privateKeys[0],
	nodeProvider: new NodeProvider(config.networks[NETWORK].nodeUrl),
});

await Destroy.execute(signer, {
	initialFields: {
		nftCollectionId:
			deployments.contracts.NFTCollection.contractInstance.contractId,
	},
	attoAlphAmount: ONE_ALPH,
});
