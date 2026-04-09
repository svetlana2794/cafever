<script setup>
import { useOrderStore } from "../stores/storeOrder.js"

import { ref } from "vue"
import { useRouter } from "vue-router"

const storeOrder=useOrderStore()
const street=ref("")
const house=ref("")
const corpus=ref("")
const building=ref("")
const flat=ref("")
const pay=ref("Карта")
const router=useRouter()

function createOrder() {
const obj={street, house, corpus, building, flat, pay}
storeOrder.addAddr(obj)
storeOrder.sendOrder()
router.replace("/acknow")
}
</script>

<template>
<form @submit.prevent="createOrder" class="p-6 pb-20 bg-[#ede0d4] rounded-xl m-2 relative h-full">

<h2 class="text-[#7f5539] text-3xl md:text-center font-[Futura] mb-6 px-16">
<button @click="router.go(-1)" class="absolute top-2 left-2">
<font-awesome-icon icon="fa-solid fa-arrow-left"/>
</button>
Шаг 2. Адрес доставки
</h2>

<label class="inline-block w-full md:w-1/5 md:text-right p-2 mt-4 mb-2 md:my-4 md:text-right after:text-red-500 after:content-['*']">Улица</label>
<input type="text" v-model="street" class="w-full md:w-4/5 p-2 mb-4 md:my-4 rounded-lg border border-[#9c6644] border-solid focus:border-[#8c2f39]" pattern="\w{3,}" required>

<br>

<label class="inline-block text-right p-2 my-4 md:text-right after:text-red-500 after:content-['*'] md:w-1/5">Дом</label>
<input type="text" v-model="house"class="inline-block p-2 my-4 rounded-lg border border-[#9c6644] border-solid focus:border-[#8c2f39]" maxlength="6" pattern=".+" required>

<br>

<label class="inline-block text-right p-2 my-4 md:text-right md:w-1/5">Корпус</label>
<input type="text" v-model="corpus" class="p-2 my-4 rounded-lg border border-[#9c6644] border-solid focus:border-[#8c2f39]" maxlength="6">

<br>

<label class="inline-block text-right p-2 my-4 md:text-right md:w-1/5">Строение</label>
<input type="text" v-model="building" class="p-2 my-4 rounded-lg border border-[#9c6644] border-solid focus:border-[#8c2f39]" maxlength="6">

<br>

<label class="inline-block text-right p-2 my-4 md:text-right">Квартира</label>
<input type="text" v-model="flat" class=" p-2 my-4 rounded-lg border border-[#9c6644] border-solid focus:border-[#8c2f39]" maxlength="6">

<br>

<label class="inline-block p-2 my-4 md:text-right">
<input type="radio" value="Карта" v-model="pay" class="invisible"/>
<span v-if="pay!='Карта'">
<font-awesome-icon icon="fa-regular fa-circle" size="lg" style="color: #b23a46"/>
</span>
<span v-else>
<font-awesome-icon icon="fa-solid fa-circle" size="lg" style="color: #b23a46"/>
</span>
Карта
</label>

<label class="inline-block p-2 my-4 md:text-right">
<input type="radio" value="Наличные" v-model="pay" class="invisible"/>
<span v-if="pay!='Наличные'">
<font-awesome-icon icon="fa-regular fa-circle" size="lg" style="color: #b23a46"/>
</span>
<span v-else>
<font-awesome-icon icon="fa-solid fa-circle" size="lg" style="color: #b23a46"/>
</span>
Наличные
</label>

<button class="absolute bottom-4 right-4  rounded-xl py-2 px-6 my-4 text-white bg-[#b23a46] hover:bg-[#da1e37] text-xl">Заказать</button>
</form>
</template>

<style>
</style>
