<script setup>
import Links from "./Links.vue"

import { useRouter } from "vue-router"

import { useCartStore } from "../stores/storeCart.js"
import { useOrderStore } from "../stores/storeOrder.js"

const storeCart=useCartStore()
const storeOrder=useOrderStore()
const router=useRouter()

function goToMain() {
storeCart.cart.clear()
storeOrder.step=0
router.push("/")
}

</script>

<template>
<div class="p-2 bg-[#ede0d4] rounded-xl m-2 h-full">
<h2 class="text-[#7f5539] text-2xl md:text-4xl xl:text-6xl text-center font-[Futura]">
<span class="float-left">Шаг 3</span>
Подтверждение заказа
</h2>

<Transition name="fade" mode="out-in">

<div v-if="storeOrder.status=='loading'" class="text-center text-2xl my-4">
Заказ обрабатывается...<br>
<span class="block my-10">
<font-awesome-icon icon="fa-solid fa-spinner" size="2xl" style="color: #7f5539" class="spin"/>
</span>
</div>
<div v-else-if="storeOrder.status=='ok'" class="text-2xl text-center my-4">Ваш заказ успешно передан.
<br>
<span class="my-6 block">
Номер заказа: {{storeOrder.numOrder}}
</span>
<button @click="goToMain" class="rounded-full py-2 px-10 text-2xl block mx-auto my-8 bg-[#b23a46] hover:bg-[#da1e37] text-white">ОК</button>
</div>
<div v-else-if="storeOrder.status=='error'" class="text-2xl text-center my-10">
<p>К сожалению оформление заказа на сайте временно не доступно. Попробуйте позже или другим способом:</p>
<Links/>
</div>

</Transition>

</div>
</template>

<style scoped>

.spin {
animation: spin 1s linear infinite;
}

@keyframes spin {
from {
transform: rotate(0deg)
}
to {
transform: rotate(360deg)
}
}

</style>
