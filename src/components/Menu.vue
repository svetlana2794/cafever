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
<div class="bg-[#ede0d4] rounded-xl m-2 h-full">
<h2 class="text-[#7f5539] text-2xl text-center p-2 relative font-[Futura]"><button @click="router.go(-1)" class="absolute top-2 left-2">
<font-awesome-icon icon="fa-solid fa-arrow-left"/>
</button>Меню</h2>

<div class="w-full flex flex-col md:flex-row md:flex-wrap justify-between items-stretch md:justify-around md:content-around">
<template v-for="item in menu" :key="item.id">
<button @click="router.push(`/menu/${item.cat}`)" class="hover:bg-[#e6ccb3] rounded-xl text-center p-2 m-2"><img :src="item.image" class="w-xs md:w-md rounded-xl my-2 mx-auto">
{{item.name}}
</button>
</template>
</div>

<ButtonCart/>
</div>
</template>

<style scoped>
</style>
