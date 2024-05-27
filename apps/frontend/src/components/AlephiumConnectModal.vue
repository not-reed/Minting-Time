<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import { AlephiumConnect, useConnect } from "@alphpro/web3-vue";

defineProps<{
	title?: string;
}>();

const emit = defineEmits<(e: "confirm") => void>();

const { onConnect, onDisconnect } = useConnect();

onConnect(() => {
	emit("confirm");
});

onDisconnect(() => {
	emit("confirm");
});
</script>

<template>
    <VueFinalModal class="flex justify-center items-center font-serif text-xl"
        content-class="flex flex-col max-w-xl mx-4 p-4 bg-black border border-white rounded-lg gap-2">

        <AlephiumConnect
            v-slot="{ isConnected, connectExtension, connectDesktop, connectMobile, connectWalletConnect, disconnect, account }">
            <template v-if="isConnected">
                <h1 class="text-2xl mb-2">
                    Connected To Alephium
                </h1>

                <p>{{ account.account.address.slice(0, 10) }}.............{{
                    account.account.address.slice(account.account.address.length - 10, account.account.address.length)
                    }}</p>

                <button class="px-4 py-2 border rounded-lg mx-auto w-48 transition bg-black hover:bg-zinc-900"
                    @click="disconnect">
                    Disconnect
                </button>
            </template>
            <template v-else>
                <h1 class="text-2xl mb-2">
                    Connect To Alephium
                </h1>

                <button class="px-4 py-2 border rounded-lg mx-auto w-48 transition bg-black hover:bg-zinc-900"
                    @click="connectExtension">
                    Extension
                </button>

                <button class="px-4 py-2 border rounded-lg mx-auto w-48 transition bg-black hover:bg-zinc-900"
                    @click="connectMobile">
                    Mobile
                </button>

                <button class="px-4 py-2 border rounded-lg mx-auto w-48 transition bg-black hover:bg-zinc-900"
                    @click="connectDesktop">
                    Desktop
                </button>

                <button class="px-4 py-2 border rounded-lg mx-auto w-48 transition bg-black hover:bg-zinc-900"
                    @click="connectWalletConnect">
                    Wallet Connect
                </button>
            </template>
        </AlephiumConnect>
    </VueFinalModal>
</template>
