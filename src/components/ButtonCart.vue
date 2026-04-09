<script setup>
import { useRouter } from "vue-router"
import { useCartStore } from "../stores/storeCart.js"

const router=useRouter()
const storeCart=useCartStore()
</script>

<template>
<RouterLink :class="[storeCart.cart.size>0 ? 'bg-[#b23a46]' : 'bg-[#9c6644]', 'text-center', 'rounded-xl', 'hover:bg-[#8c2f39]', 'text-white', 'px-2', 'py-4', 'fixed', 'bottom-8', 'right-5']" to="/cart">
<span class="text-lg/8">
<font-awesome-icon icon="fa-solid fa-basket-shopping" size="2xl"/>
{{storeCart.cart.size}}
</span>
</RouterLink>
</template>

<style>
</style>
