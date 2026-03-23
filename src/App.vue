<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router"

const route=useRoute()

import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
</script>

<template>

<Header/>
<main>
<RouterView v-slot="{Component, route}">
<Transition :name="route.meta.transition" mode="out-in">
<component :is="Component"/>
</Transition>
</RouterView>
</main>
<Footer/>
</template>

<style>

.fade-enter-active, .fade-leave-active {transition: opacity 0.5s linear;
}

.fade-enter-from, .fade-leave-to {
opacity: 0;
}

.slide-next-enter-active,
.slide-next-leave-active {
transition: all 0.5s linear;
}

.slide-next-enter-from {
opacity: 0;
transform: translateX(200%);
}

.slide-next-leave-to {
opacity: 0;
transform: translateX(-100%);
}

.slide-left-enter-active,
.silde-left-leave-active {
transition: all 0.5s linear;
}

.slide-left-enter-from,
.slide-left-leave-to {
opacity: 0;
transform: translateX(-100%);
}

</style>
