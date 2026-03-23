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
<form @submit.prevent="createOrder" class="p-2 pb-20 bg-[#ede0d4] rounded-xl m-2 relative h-full">

<h2 class="text-[#7f5539] text-2xl md:text-4xl xl:text-6xl text-center font-[Futura]">
<span class="float-left">Шаг 2</span>
Адрес доставки
</h2>

<label class="inline-block w-full md:w-1/2 md:text-right p-2 mt-4 mb-2 md:my-4 md:text-right after:text-red-500 after:content-['*']">Улица</label>
<input type="text" v-model="street" class="w-full md:w-1/2 p-2 mb-4 md:my-4 rounded-lg border border-[#9c6644] border-solid focus:border-[#8c2f39]">

<br>

<label class="inline-block w-1/2 md:w-1/4 text-right p-2 my-4 xl:w-1/8 md:text-right after:text-red-500 after:content-['*']">Дом</label>
<input type="text" v-model="house"class="inline-block w-1/2 md:w-1/4 xl:w-1/8 p-2 my-4 rounded-lg border border-[#9c6644] border-solid focus:border-[#8c2f39]">

<label class="inline-block w-1/2 md:w-1/4 text-right p-2 my-4 xl:w-1/8 md:text-right">Корпус</label>
<input type="text" v-model="corpus" class="w-1/2 md:w-1/4 xl:w-1/8 p-2 my-4 rounded-lg border border-[#9c6644] border-solid focus:border-[#8c2f39]">

<label class="inline-block w-1/2 md:w-1/4 text-right p-2 my-4 xl:w-1/8 md:text-right">Строение</label>
<input type="text" v-model="building" class="w-1/2 md:w-1/4 xl:w-1/8 p-2 my-4 rounded-lg border border-[#9c6644] border-solid focus:border-[#8c2f39]">


<label class="inline-block w-1/2 md:w-1/4 text-right p-2 my-4 md:text-right">Квартира</label>
<input type="text" v-model="flat" class="w-1/2 md:w-1/4 xl:w-1/8 p-2 my-4 rounded-lg border border-[#9c6644] border-solid focus:border-[#8c2f39]">

<label class="inline-block w-1/2 p-2 my-4 md:text-right">
<input type="radio" value="Карта" v-model="pay" class="invisible"/>
<span v-if="pay!='Карта'">
<font-awesome-icon icon="fa-regular fa-circle" size="lg" style="color: #b23a46"/>
</span>
<span v-else>
<font-awesome-icon icon="fa-solid fa-circle" size="lg" style="color: #b23a46"/>
</span>
Карта
</label>

<label class="inline-block w-1/2 p-2 my-4 md:text-right">
<input type="radio" value="Наличные" v-model="pay" class="invisible"/>
<span v-if="pay!='Наличные'">
<font-awesome-icon icon="fa-regular fa-circle" size="lg" style="color: #b23a46"/>
</span>
<span v-else>
<font-awesome-icon icon="fa-solid fa-circle" size="lg" style="color: #b23a46"/>
</span>
Наличные
</label>

<button class="block absolute bottom-4 right-4 md:w-1/2 rounded-xl py-2 px-6 my-4 text-white bg-[#b23a46] hover:bg-[#da1e37]">Заказать</button>
</form>
</template>

<style>
</style>
