<script setup>
import { useOrderStore } from "../stores/storeOrder.js"

import { ref } from "vue"
import { useRouter } from "vue-router"

const storeOrder=useOrderStore()
const name=ref("")
const tel=ref("")
const email=ref("")
const subscribe=ref(false)
const router=useRouter()

function createClient() {
const obj={name, tel, email, subscribe}
storeOrder.addClient(obj)
router.replace("/delivery")
}
</script>

<template>
<form @submit.prevent="createClient" class="p-2 pb-32 bg-[#ede0d4] rounded-xl m-2 relative h-full">
<h2 class="text-[#7f5539] text-2xl md:text-4xl xl:text-6xl text-center font-[Futura]">
<span class="float-left">Шаг 1</span>
Контактные данные</h2>

<label class="inline-block w-full md:w-1/2 md:text-right p-2 pl-0 after:text-red-500 after:content-['*']">Имя</label>
<input type="text" v-model="name" class="w-full md:w-1/2 p-2 rounded-lg border border-[#9c6644] border-solid outline-[#8c2f39]">

<label class="inline-block w-full md:w-1/2 md:text-right p-2 pl-0 after:text-red-500 after:content-['*']">Телефон</label>
<input type="tel" v-model="tel" class="w-full md:w-1/2 p-2 rounded-lg border border-[#9c6644] border-solid outline-[#8c2f39]">

<label class="inline-block w-full md:w-1/2 md:text-right p-2 pl-0">Email</label>
<input type="email" v-model="email" class="w-full md:w-1/2 p-2 rounded-lg border border-[#9c6644] border-solid outline-[#8c2f39]">

<label class="p-2 my-2 inline-block relative">
<input type="checkbox" v-model="subscribe" class="invisible">
<span v-if="!subscribe" class="absolute left-0">
<font-awesome-icon icon="fa-regular fa-square-full" size="lg" style="color: #b23a46"/>
</span>
<span v-else class="absolute left-0">
<font-awesome-icon icon="fa-solid fa-square-check" size="lg" style="color: #b23a46"/>
</span>
Подписаться на рассылку</label>

<button class="absolute bottom-6 right-6 bg-[#b23a46] p-2 m-4 rounded-xl text-white">Продолжить</button>
</form>
</template>

<style scoped>
</style>
