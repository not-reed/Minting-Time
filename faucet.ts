import { argv } from "bun";

// curl -X POST -d '...your-address...' https://faucet.testnet.alephium.org/send
const resp = await fetch("https://faucet.testnet.alephium.org/send", {
	method: "POST",
	body: argv[2],
}).then((a) => a.text());

console.log(resp);
