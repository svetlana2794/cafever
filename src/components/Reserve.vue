<script setup>
import Links from "./Links.vue"
</script>

<template>
<div class="p-4 m-2 text-center bg-[#ede0d4] rounded-xl h-full">
<h2 class="text-center text-[#7f5539] text-2xl md:text-4xl xl:text-6xl p-2 font-[Futura]">Бронирование</h2>
<p class="my-2 lg:my-4">В распоряжении гостей два зала: основной (ресторан) и VIP-пространство.</p>
<p class="flex flex-col md:flex-row justify-around items-center my-4 lg:my-8">
<img src="../../public/imgs/common.jpg" class="w-3xs md:w-sm xl:w-lgmy-4">
<img src="../../public/imgs/vip.png" class="w-3xs md:w-sm xl:w-lg my-4">
</p>
<p class="my-4 lg:my-8">Чтобы забронировать стол или зал</p>
<Links/>
<p class="my-4 lg:my-8">Рады, что вы хотите посетить нас!</p>
</div>
</template>

<style>
</style>
