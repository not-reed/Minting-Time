import { PrivateKeyWallet } from "@alephium/web3-wallet";
import { NodeProvider, ONE_ALPH } from "@alephium/web3";
import { loadDeployments } from "artifacts/ts/deployments";
import { Withdraw } from "artifacts/ts";
import config from "../alephium.config";
import { validateNetwork } from "./utils";

const NETWORK = validateNetwork(["devnet", "testnet", "mainnet"]);

const deployments = loadDeployments(NETWORK);

const signer = new PrivateKeyWallet({
	privateKey: config.networks[NETWORK].privateKeys[0],
	nodeProvider: new NodeProvider(config.networks[NETWORK].nodeUrl),
});

const balance = await signer.nodeProvider.addresses.getAddressesAddressBalance(
	deployments.contracts.NFTCollection.contractInstance.address,
);

await Withdraw.execute(signer, {
	initialFields: {
		nftCollectionId:
			deployments.contracts.NFTCollection.contractInstance.contractId,
		to: signer.address,
		amount: BigInt(balance.balance) - ONE_ALPH / 10n, // TODO update for rhone, 0.1 instead of 1
	},
	attoAlphAmount: ONE_ALPH,
});
