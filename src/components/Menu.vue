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
<div class="bg-[#ede0d4] rounded-xl m-2 h-full lg:w-3/4 p-2">
<h2 class="text-[#7f5539] text-3xl text-center p-2 relative font-[Futura]"><button @click="router.go(-1)" class="absolute top-2 left-2">
<font-awesome-icon icon="fa-solid fa-arrow-left"/>
</button>Меню</h2>

<div class="w-full flex flex-col md:flex-row md:flex-wrap justify-between items-stretch md:justify-around md:content-around">
<template v-for="item in menu" :key="item.id">
<button @click="router.push(`/menu/${item.cat}`)" style="{backgroundImage: item.image}" class="bg-center bg-[100%_auto] rounded-xl m-2 w-xs h-[240px] relative hover:scale-130 origin-center">
<span class="w-full absolute bottom-0 text-white bg-[#9E6A46] p-2 text-center">{{item.name}}</span>
</button>
</template>
</div>

<ButtonCart/>
</div>
</template>

<style scoped>
</style>
