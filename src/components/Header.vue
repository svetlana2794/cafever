<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const rotate=ref(false)
const router=useRouter()

</script>

<template>

<header class="bg-[#9c6644] text-white self-stretch shrink-0">
<h1 class="text-center text-4xl xl:text-6xl 2xl:text-9xl p-4 flex justify-between items-center">
<img src="../styles/logo.png" class="size-16 my-2 mx-[10px] shrink-0">
<span class="font-[Futura] text-5xl">
Италия
</span>
<button :class="['size-16', 'transition-transform', 'duration-500', 'ease-linear', rotate && 'rotate-90','origin-center', 'xl:hidden', 'mx-[10px]', 'my-2', 'shrink-0']" @click="rotate=!rotate">
<font-awesome-icon icon="fa-solid fa-bars"/>
</button>
</h1>
<nav :class="['text-white', rotate ? 'scale-x-100' : 'scale-x-0', 'origin-right', 'transition-all', 'duration-500', 'ease-linear', 'xl:scale-x-100', 'flex', 'flex-col', 'items-stretch', 'xl:flex-row', 'absolute', 'right-0', 'top-24', 'xl:static', 'bg-[#9c6644]', 'text-xl', 'w-full', 'z-10']" @click="rotate=false">
<button class="xl:grow py-4 px-10 hover:bg-[#7f5539]" @click="router.push('/')">Главная</button>
<button class="xl:grow py-4 text-center hover:bg-[#7f5539]" @click="router.push('/menu')">Меню</button>
<button class="xl:grow py-4 text-center hover:bg-[#7f5539]" @click="router.push('/cart')">Корзина</button>
<button class="xl:grow py-4 text-center hover:bg-[#7f5539]" @click="router.push('/reserve')">Бронирование</button>
<button class="xl:grow py-4 text-center hover:bg-[#7f5539]" @click="router.push('/contacts')">О нас</button>
</nav>
</header>

</template>

<style scoped>
</style>
