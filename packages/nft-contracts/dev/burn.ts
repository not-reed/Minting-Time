import { BurnNFT } from "../artifacts/ts";
import { PrivateKeyWallet } from "@alephium/web3-wallet";
import {
	NodeProvider,
	contractIdFromAddress,
	binToHex,
	addressFromContractId,
} from "@alephium/web3";
import config from "../alephium.config";
import { validateNetwork } from "./utils";

const NETWORK = validateNetwork(["devnet", "testnet"]);

const signer = new PrivateKeyWallet({
	privateKey: config.networks[NETWORK].privateKeys[0],
	nodeProvider: new NodeProvider(config.networks[NETWORK].nodeUrl),
});

const nftId = binToHex(
	contractIdFromAddress("24C64mSzX9RtpRwtb1MTdA3xrr31pVhccGQicXrsnFAdM"),
);

const balance = await signer.nodeProvider.addresses.getAddressesAddressBalance(
	"1DrDyTr9RpRsQnDnXo2YRiPzPW4ooHX5LLoqXrqfMrpQH",
);

console.log({ b: balance.tokenBalances });
if (balance.tokenBalances) {
	for (const token of balance.tokenBalances) {
		if (token.amount === "1") {
			try {
				console.log("Burning Token", addressFromContractId(token.id));
				await BurnNFT.execute(signer, {
					initialFields: { nft: token.id },
					attoAlphAmount: 10n ** 18n,
					tokens: [{ id: token.id, amount: 1n }],
				});
			} catch (e) {
				console.log(e);
			}
		}
	}
}
