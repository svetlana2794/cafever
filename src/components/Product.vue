<script setup>
import ButtonCart from "./ButtonCart.vue"
import Addition ftom "./Addition.vue"

import { useCartStore } from "../stores/storeCart.js"

import { ref, reactive, watch } from "vue"
import { useRoute, useRouter } from "vue-router"

const storeCart=useCartStore()
const product=ref(null)
const newElem=reactive({
id: "",
name: "",
price: "",
image: "",
quantity: 1,
adds: new Map()
})
const adds=reactive([])
const route=useRoute()
const router=useRouter()

function addCart() {
newElem.id=product.value.id
newElem.name=product.value.name
newElem.price=product.value.price
newElem.image=product.value.image
storeCart.addCart(product.value.id, newElem)
newElem.id=""
}

watch(() => route.params,
async () => {
try {
const response=await fetch("/data/"+route.params.cat+".json")
let list=await response.json()
product.value=list.find(elem => elem.id==route.params.id)
} catch (err) {
product.value=err
}
}, {
immediate: true,
deep: true
})

</script>

<template>

<div class="bg-[#ede0d4] rounded-xl m-4 px-4 py-2 h-full lg:w-[500px]">

<h2 class="text-[#7f5539] text-3xl text-center py-2 px-16 w-full relative font-[Futura]">

<button @click="router.go(-1) class="absolute top-2 left-2">
<font-awesome-icon icon="fa-solid fa-arrow-left"/>
{{product.name}}
</button>
</h2>

<img :src="product.image" class="mx-auto my-6 w-xs lg:w-md rounded-lg">

<p class="w-full mx-2 my-4 md:text-lg xl:text-xl">{{product.structure}}</p>

<span class="text-[#b23a48] font-bold mx-2 my-4  md:text-lg xl:text-xl">{{product.price}} руб.</span>

<Addition v-if="route.params.cat=='pizza'" @handle-add="(name, price) => newRldm.adds.set(name, price)" :newElem="newElem"/>

<button @click="addCart" :disabled="storeCart.cart.has(product.id)" class="text-white rounded-xl bg-[#b23a48]  hover:bg-[#8c2f39] disabled:bg-[#e6ccb2] disabled:text-black py-2 px-4 mx-auto mt-4 mb-2 block md:text-lg xl:text-xl">
{{storeCart.cart.has(product.id) ? 'Добавлено' : 'В корзину'}}
</button>

<ButtonCart/>

</div>

</template>

<style scoped></style>