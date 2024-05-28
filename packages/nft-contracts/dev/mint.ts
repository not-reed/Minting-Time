import { Destroy, MintNFT, Withdraw } from "../artifacts/ts";
import { PrivateKeyWallet } from "@alephium/web3-wallet";
import { NodeProvider, ONE_ALPH, DUST_AMOUNT } from "@alephium/web3";
import { loadDeployments } from "artifacts/ts/deployments";
import config from "../alephium.config";
import { validateNetwork } from "./utils";

const NETWORK = validateNetwork(["devnet", "testnet"]);

const deployments = loadDeployments(NETWORK);

const signer = new PrivateKeyWallet({
	privateKey: config.networks[NETWORK].privateKeys[0],
	nodeProvider: new NodeProvider(config.networks[NETWORK].nodeUrl),
});

const wait = async (ms: number) => new Promise((r) => setTimeout(r, ms));

// auto mints 377 NFTs - BE CAREFUL
for (let i = 0; i < 377; i++) {
	await MintNFT.execute(signer, {
		initialFields: {
			collection:
				deployments.contracts.NFTCollection.contractInstance.contractId,
		},
		attoAlphAmount: ONE_ALPH * 5n + 100000000000000000n + DUST_AMOUNT,
	});
	console.log(`Minted NFT ${i}.`);

	if (
		[
			// a whole bunch of destroys
			75, 76, 77, 151, 152, 153, 227, 228, 229, 303, 304, 305, 125, 126, 127,
			251, 252, 253,
		].includes(i)
	) {
		await Destroy.execute(signer, {
			initialFields: {
				nftCollectionId:
					deployments.contracts.NFTCollection.contractInstance.contractId,
			},
			attoAlphAmount: ONE_ALPH,
		});

		console.log(`===============================> Destroyed NFT ${i}.`);
	}

	if ([75, 250, 376].includes(i)) {
		const balance =
			await signer.nodeProvider.addresses.getAddressesAddressBalance(
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

		console.log(
			`~~~~~~~~~~~~~~~~~~~~~~ Withdrew NFT ${i}. ~~~~~~~~~~~~~~~~~~~~~~`,
		);
	}

	console.log("Pausing for 1.5 seconds");
	// await wait(1500);
}
