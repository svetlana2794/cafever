<script setup>
import ButtonCart from "./ButtonCart.vue"

import { ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"

const menuCat=ref(null)
const route=useRoute()
const router=useRouter()

watch(
() => route.params.cat,
async (newValue, oldValue) => {
try{
const response=await fetch("/data/"+newValue+".json")
menuCat.value=await response.json()
} catch (err) {
menuCat.value=err
}
},
{immediate: true})
</script>

<template>
<div class="bg-[#ede0d4] rounded-xl my-2 h-full lg:w-3/4 p-2 mx-auto">
<h2 class="text-[#7f5539] text-3xl text-center py-2 px-16 mb-4 w-full relative font-[Futura]">
<button @click="router.go(-1)" class="top-2 left-2 absolute">
<font-awesome-icon icon="fa-solid fa-arrow-left"/>
</button>{{menuCat[0].cat}}</h2>

<div class="w-full flex flex-col md:flex-row md:flex-wrap justify-between items-stretch md:justify-around md:content-around">
<template v-for="item in menuCat" :key="item.id">
<button @click="router.push(`/menu/${route.params.cat}/${item.id}`)" style="{backgroundImage: 'url('+item.image+')'}" class="bg-center bg-[100%_auto] rounded-xl m-2 w-xs h-[240px] relative hover:scale-130 origin-center transition duration-500 linear">
<span class="w-full absolute left-0 bottom-0 text-white bg-[#9E6A46] p-2 text-center">{{item.name}}</span>
</button>
</template>
</div>

<ButtonCart/>
</div>
</template>

<style scoped>
</style>
