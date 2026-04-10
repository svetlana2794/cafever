<script setup>
import ButtonCart from "./ButtonCart.vue"

import { ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"

const menu=ref(null)
const route=useRoute()
const router=useRouter()

watch(
() => route.params.cat,
async (newValue, oldValue) => {
try{
const response=await fetch("/data/menu.json")
menu.value=await response.json()
} catch (err) {
menu.value=err
}
},
{immediate: true})
</script>

<template>
<div class="bg-[#ede0d4] rounded-xl my-4 h-full lg:w-3/4 p-2 mx-auto">
<h2 class="text-[#7f5539] text-3xl text-center p-2 relative font-[Futura]">Меню</h2>

<div class="w-full flex flex-col md:flex-row md:flex-wrap justify-between items-stretch md:justify-around md:content-around">
<template v-for="item in menu" :key="item.id">
<button @click="router.push(`/menu/${item.cat}`)" :style="{backgroundImage: 'url('+item.image+')'}" class="bg-top bg-[100%_auto] rounded-xl m-2 w-xs h-[230px] relative hover:scale-120 origin-center transition duration-500 linear">
<span class="w-full absolute left-0 bottom-0 text-white bg-[#9E6A46] p-2 text-center rounded-b-xl">{{item.name}}</span>
</button>
</template>
</div>

<ButtonCart/>
</div>
</template>

<style scoped>
</style>
