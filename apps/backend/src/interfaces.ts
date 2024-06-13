export interface MetaData {
	image: `data:image/svg+xml;base64,${string}`;
	name: string;
	attributes: Array<{ trait_type: string; value: string }>;
}

export interface ClockNFT {
	address: string;
	id: string;
	index: `${number}`;
	minter: string;
	metadata: MetaData;
}
