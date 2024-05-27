import { hc } from "hono/client";
import type { BalanceApiRoute } from "@app/backend/src/index.ts";
import { API_URL } from "./data";

const client = hc<BalanceApiRoute>(API_URL);

export async function getBalance(address: string) {
	const response = await client.api.balances[":address"]
		.$get({ param: { address } })
		.then((a) => a.json());

	return response;
}
