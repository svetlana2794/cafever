<script setup>
import { useRouter } from "vue-router"

const router=useRouter()
</script>

<template>
<div class="p-6 text-3xl m-2 text-center bg-[#ede0d4] rounded-xl">
<p class="py-4 font-[Futura]">Свет, простор и теплая атмосфера.</p>
<p class="py-4 font-[Futura]">Все, за что мы любим Италию - в одном месте.</p>
<RouterLink class="bg-[#b23a46] text-white hover:bg-[#da1e37] px-4 py-2 block mx-auto mb-6 mt-10 w-1/2 text-center rounded-full" to="/menu">Меню</RouterLink>
</div>
</template>

<style scoped>
</style>
