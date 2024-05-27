import { isBase58 } from "@alephium/web3";

import { expect } from "bun:test";

export * from "@alephium/web3-test";

// override the above since we are not using jests global 'expect'
// https://github.com/alephium/alephium-web3/blob/f68c686ffd772a9d6e34201712fd95e615778daf/packages/web3-test/src/test-wallet.ts#L134
export async function expectAssertionError(
	p: Promise<unknown>,
	address: string,
	errorCode: number,
): Promise<void> {
	expect(isBase58(address)).toEqual(true);
	await expect(p).rejects.toThrowError(
		new RegExp(
			`Assertion Failed in Contract @ ${address}, Error Code: ${errorCode}`,
			"mg",
		),
	);
}
