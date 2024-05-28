<script setup lang="ts">

import { AlephiumConnect, AlephiumConnectionProvider, AlephiumExecute, useAccount, useConnect } from "@alphpro/web3-vue";
import Clock from "./components/Clock.vue";
import { ModalsContainer, useModal } from "vue-final-modal";
import AlephiumConnectModal from "./components/AlephiumConnectModal.vue";

import { ONE_ALPH, DUST_AMOUNT } from "@alephium/web3";

// biome-ignore lint/style/useImportType: biome bug thinks this is a type import because its only used in the template
import { MintNFT, BurnNFT } from "@repo/nft-contracts/artifacts/ts/scripts";

import { computed, ref } from "vue";
import { NETWORK, deployments } from "./data";
import { getBalance } from "./api";


const { onConnect, onDisconnect } = useConnect()
const { account } = useAccount();

const clocks = ref([] as Awaited<ReturnType<typeof getBalance>>);

onConnect(async () => {
	syncBalances()
})

onDisconnect(() => {
	clocks.value = []
})

async function syncBalances() {
	if (!account?.address) {
		clocks.value = []
		return;
	}
	const res = await getBalance(account.address)
	clocks.value = res
}

setInterval(() => {
	if (account.address) {
		syncBalances()
	}
}, 5_000)

// const withdrawAmount = ref('0');
const fields = computed(() => ({
	initialFields: { 
		collection:
				deployments.contracts.NFTCollection.contractInstance.contractId },
	attoAlphAmount: ONE_ALPH * 5n + 100000000000000000n + DUST_AMOUNT,
}) satisfies Parameters<typeof MintNFT.execute>[1]);

const { open, close } = useModal({
	component: AlephiumConnectModal,
	attrs: {
		onConfirm() {
			close();
		},
	},
});

const pendingTransaction = ref(false)
</script>

<template>

	<AlephiumConnectionProvider :autoConnect="true" :group="0" :network="NETWORK">

		<div class="hidden">
			<Clock />
		</div>

		<div class="w-full overflow-hidden fixed top-0 pointer-events-none -z-10">
			<div class="-ml-24 flex flex-wrap flex-2 w-[calc(100vw+24rem)] opacity-5">
				<div class="h-48 w-48" v-for="_ in 100">
					<svg xmlns="http://www.w3.org/2000/svg" stroke="#000"
						:style="`transform: rotate(-90deg); --s: ${Math.floor(Math.random() * 60)}; --m: ${Math.floor(Math.random() * 60)}; --h: ${Math.floor(Math.random() * 12)}; `"
						viewBox="0 0 40 40">
						<use xlink:href="#clock-template" />
					</svg>
				</div>
			</div>
		</div>

		<main class="p-8 flex flex-col gap-8 font-serif">
			<h1 class="text-8xl">
				Minting Time
			</h1>

			<section class="flex items-center justify-center max-w-xl w-full">
				<AlephiumConnect v-slot="{ isConnected }">

					<button v-if="!isConnected" @click="open"
						class="border text-6xl flex max-w-xl w-full justify-start items-center gap-8 bg-zinc-900 hover:bg-black rounded-lg p-4 shadow-lg hover:shadow-xl transition hover:-translate-y-px hover:-translate-x-px active:translate-y-1 active:translate-x-1 active:shadow active:scale-[0.97] active:bg-zinc-800">
						<div class="h-12 w-12">
							<svg xmlns="http://www.w3.org/2000/svg" stroke="#000"
								:style="`transform: rotate(-90deg); --s: ${Math.floor(Math.random() * 60)}; --m: ${Math.floor(Math.random() * 60)}; --h: ${Math.floor(Math.random() * 12)}; `"
								viewBox="0 0 40 40">
								<use xlink:href="#clock-template" />
							</svg>
						</div> Connect To Mint
					</button>
					<AlephiumExecute :txScript="MintNFT" :fields="fields" v-slot="{ execute }" v-else>
						<button @click="execute" class=" border text-6xl flex max-w-xl justify-start items-center gap-8 bg-zinc-900 hover:bg-black rounded-lg p-4
							shadow-lg hover:shadow-xl transition hover:-translate-y-px hover:-translate-x-px
							active:translate-y-1 active:translate-x-1 active:shadow active:scale-[0.97]
							active:bg-zinc-800">
							<div class="h-12 w-12">
								<svg xmlns="http://www.w3.org/2000/svg" stroke="#000"
									:style="`transform: rotate(-90deg); --s: ${Math.floor(Math.random() * 60)}; --m: ${Math.floor(Math.random() * 60)}; --h: ${Math.floor(Math.random() * 12)}; `"
									viewBox="0 0 40 40">
									<use xlink:href="#clock-template" />
								</svg>
							</div>Mint: <span>5<span class="opacity-50">+.1 ALPH</span></span>
						</button>
					</AlephiumExecute>

				</AlephiumConnect>
			</section>

			<section class="flex flex-col gap-4">
				<AlephiumConnect v-slot="{ isConnected, account }">
					<template v-if="!isConnected">
						<div class="flex flex-col">
							<h2 class="text-4xl">Your Collected TimeZones:</h2>
							<p>Not Connected</p>
						</div>
					</template>
					<template v-else>
						<div class="flex flex-col">
							<h2 class="text-4xl">Your Collected TimeZones:</h2>
							<div>

								<button @click="open" class="bg-black">
									<p v-if="account.account.address.length > 50">
										{{ account.account.address.slice(0, 25) }}...{{
										account.account.address.slice(account.account.address.length - 25,
										account.account.address.length) }}
									</p>
									<p v-else>{{ account.account.address}}</p>
								</button>
							</div>
						</div>

						<TransitionGroup name="list" tag="div" class="grid grid-cols-2 justify-between max-w-xl gap-8">
							<div class="flex flex-col items-center bg-zinc-900 p-4 rounded-lg" key="loading"
								v-if="pendingTransaction">
								<div class="h-24 w-24">

									<svg xmlns="http://www.w3.org/2000/svg" stroke="#000"
										style="transform: rotate(-90deg)" viewBox="0 0 40 40">
										<circle cx="20" cy="20" r="19" />
										<g class="m">
											<line x1="15" x2="16" />
											<line x1="15" x2="16" />
											<line x1="15" x2="16" />
											<line x1="15" x2="16" />
											<line x1="15" x2="16" />
											<line x1="15" x2="16" />
											<line x1="15" x2="16" />
											<line x1="15" x2="16" />
											<line x1="15" x2="16" />
											<line x1="15" x2="16" />
											<line x1="15" x2="16" />
											<line x1="15" x2="16" />
										</g>
										<circle cx="20" cy="20" r=".7" class="pin" />
									</svg>
								</div>
								<div>Loading...</div>
							</div>
							<div v-for="clock in clocks" class="flex flex-col items-center bg-zinc-900 p-4 rounded-lg"
								:key="clock.id">
								<img :src="clock.metadata.image" alt="clock" class="h-24 w-24" />
								<div>{{ decodeURIComponent(clock.metadata.name) }}</div>

								<!-- <AlephiumExecute :txScript="BurnNFT" :fields="{
	initialFields: { nft: clock.id },
	tokens: [{ id: clock.id, amount: 1n }],
}" v-slot="{ execute }">
									<button @click="execute" class=" border text-6xl flex max-w-xl justify-start items-center gap-8 bg-zinc-900 hover:bg-black rounded-lg p-4
							shadow-lg hover:shadow-xl transition hover:-translate-y-px hover:-translate-x-px
							active:translate-y-1 active:translate-x-1 active:shadow active:scale-[0.97]
							active:bg-zinc-800">
										<div class="h-12 w-12">
											<svg xmlns="http://www.w3.org/2000/svg" stroke="#000"
												:style="`transform: rotate(-90deg); --s: ${Math.floor(Math.random() * 60)}; --m: ${Math.floor(Math.random() * 60)}; --h: ${Math.floor(Math.random() * 12)}; `"
												viewBox="0 0 40 40">
												<use xlink:href="#clock-template" />
											</svg>
										</div>BURN
									</button>
								</AlephiumExecute> -->
							</div>
						</TransitionGroup>
					</template>

				</AlephiumConnect>
			</section>

			<section>
				<div class="bg-zinc-900/75 max-w-xl flex flex-col gap-4 p-4 w-full">
					<h2 class="text-4xl">What Is Minting Time</h2>
					<p class="pl-4">
						Aside from the punny name. Minting Time is the first entirely onchain
						collection on Alephium. Its a collection of 377 unique clocks representing various timezones,
						generated in real-time as you view them.
					</p>

					<p class="italic">> Aren't all Alephium NFTs entirely on Alephium though?</p>

					<p class="pl-4">
						Sort of... Generally speaking the contract on Alephium simply contains data pointing
						the where to find the off-chain components such as the image itself and traits. Sometimes this
						points to a traditional Web2 website which can be a problem since if the website owner shuts the
						website down, it renders your NFT image inaccessible.
					</p>

					<p class="pl-4">
						An improvement over this is IPFS, as it provides a decentralized P2P
						alternative, however this still relies on someone to host the data, known as
						<span class="italic">"pinning"</span>. This is an improvement as NFT owners now have the ability
						to pin their owned NFT's ensuring content accessability, however in practice, not many end-users
						pin their own content and simply rely on the original creator to continue to pin forever. If the
						creator stops pinning, and no one else has the content pinned, then similar to the method above,
						the content is rendered inaccessible.
					</p>

					<p class="pl-4">
						The most commonly used method on Alephium however is Arweave. This is due, in no
						small part, to the support of DeadRare as its the recommended method from their documentation.
						Arweave's goal is to provide a permanent, immutable, decentralized solution to static data
						storage. Creators pay initially to upload the files to the network, where they continue to be
						accessible in perpetuity so long as the Arweave network remains functional.
					</p>

					<p class="italic">> Ok so how is Minting Time different?</p>

					<p class="pl-4">
						Each solution above has its own pros and cons. Websites provide content flexibility but are
						centralized. IPFS & Arweave are decentralized and offer varying levels of immutability and
						permanence, but are only capable of hosting static files.
					</p>

					<p class="pl-4">
						Minting Time is generated and stored 100% on the Alephium Chain. no website to host images, no
						IPFS, no Arweave. During the minting process, each NFT gets a random & unique timezone and
						locale
						assigned to it, which is stored as an immutable field on the contract itself. Every time the
						image
						is fetched from the blockchain, the current time as reported by the Alephium node is used to
						generate a new clock image from the set timezone. This ensures that every load of the image is
						exactly synced to the latest Alephium Blockchain time. This method of hosting NFT's has its
						restrictions as it can be more difficult to develop for, and since image data is required to fit
						onchain the entire contract is constrained by both contract size of 32kb and gas usage when
						generating the image.
					</p>

					<p class="italic">> Wait, how is this possible?</p>

					<p class="pl-4">
						SVGs! Unlike binary formats such as JPG or PNG, SVG is a markup language similar to
						HTML. This means images can be built using simple string manipulation techniques like
						concatenation. Also similar to HTML, these can be styled and animated using traditional CSS, and
						viewed easily in any web browser. Of course SVGs can be pre-generated and stored on IPFS or
						Arweave, similar to any other image format and most other NFT's in circulation today, however by
						generating these images on the fly within Ralph smart contracts, we have access to real time
						onchain data. Combined with the knowledge above, this presents some really interesting
						opportunities for displaying onchain data in real time using dynamic NFTs.
					</p>
				</div>
			</section>

			<section>
				<div class="bg-zinc-900/75 max-w-xl flex flex-col gap-4 p-4 w-full">
					<h2 class="text-4xl">Who Made This</h2>
					<p class="pl-4">Find me on X
						<a href="https://x.com/0x_reed" target="_blank"
							class="text-sky-500 font-bold border-b border-sky-500 hover:italic cursor-pointer">0xreed</a>
						or 0xreed on Discord. I created this as part of my ongoing research and development while
						building
						<a href="https://www.theducklounge.com" target="_blank"
							class="text-sky-500 font-bold border-b border-sky-500 hover:italic cursor-pointer">What The
							Duck</a>
					</p>

				</div>
			</section>


		</main>


		<footer>
			Copyright © {{ new Date().getFullYear() }} 0xreed. All Rights Reserved.
		</footer>



		<!-- <AlephiumConnect v-slot="{ isConnected, connectExtension, connectDesktop, disconnect }">
			<template v-if="!isConnected">
				<button @click="connectExtension">Extension</button>
				<button @click="connectDesktop">Desktop</button>
			</template>
<button v-else @click="disconnect">Disconnect</button>
</AlephiumConnect>

<br />{{ account.address }}<br /> -->
		<!-- 
		<AlephiumExecute :txScript="MintNFT" :fields="fields" v-slot="{ execute }"
			@txConfirmed="handleConfirmedTransaction" v-if="account.address">
			<form @submit.prevent="execute">
				<label>Can withdraw as long as amount is less than or equal to '100'<br />
					<input type="text" v-model="withdrawAmount" />
				</label>
				<button type="submit">Withdraw</button>
			</form>
		</AlephiumExecute> -->

		<ModalsContainer />
	</AlephiumConnectionProvider>
</template>
