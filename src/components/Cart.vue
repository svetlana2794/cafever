<script setup>
import { useCartStore } from '../stores/storeCart.js'

import { useRouter } from 'vue-router'

const storeCart=useCartStore()
const router=useRouter()

</script>

<template>

<div class="bg-[#ede0d4] rounded-xl m-2 p-2 h-full">
<h2 class="text-[#7f5539] text-center text-3xl p-2 font-[Futura]">

<button v-if="storeCart.cart.size>0" @click="router.go(-1)" class="float-left">
<font-awesome-icon icon="fa-solid fa-arrow-left"/>
</button>

Состав заказа

<button v-if="storeCart.cart.size>0" @click="storeCart.clearCart()" class="float-right">
<fint-awesome-icon icon="fa-solid fa-trash"/>
</button>
</h2>

<template v-if="storeCart.cart.size>0">
<ul class="mx-6 p-2 w-[300px] md:w-[350px]">
<li v-for="[key, item] in storeCart.cart" :key="key" class="p-4">

<img :src="item.image" class="w-32 float-left rounded-xl">
<button @click="storeCart.removeInCart(key)" class="float-right">
<font-awesome-icon icon="fa-solid fa-xmark" size="xl" style="color: #7f5539"/>
</button>

<h4 class="text-[#7f5539] clear-both py-4">
{{item.name}}
<span class="float-right">

<button @click="item.quantity==1 ? 1 : item.quantity--">
<font-awesome-icon icon="fa-solid fa-minus"/>
</button>
<span>{{item.quantity}}</span>
<button @click="item.quantity++">
<font-awesome-icon icon="fa-solid fa-plus"/>
</button>

</span>

</h4>

<p class="text-[#b23a46]">{{item.price}} руб.</p>

<ul v-if="item.adds.size>0" class="pl-16 my-2">
<span>Дополнения:</span>
<li v-for="[name, price] in item.adds" :key="name" class="text-sm">
{{name}} <span class="text-[#b23a46]">{{price}} руб.</span>
</li>
</ul>

<p>Сумма: <span class="text-[#b23a46]">{{storeCart.sum(item)*item.quantity}} руб.</span></p>
</li>
</ul>

<p class="font-bold ml-2">Итого: {{storeCart.total}} руб.</p>

<p v-if="storeCart.total<1500" class="m-2 text-[#b23a46] text-center">Минимальная сумма заказа 1500 рублей</p>

<p v-if="storeCart.total>=1500" class="m-2">Стоимость доставки: {{storeCart.total < 2000 ? "250 руб." : "бесплатно"}}</p>

<button :disabled="storeCart.total<1500" @click="router.push('/client')" class="block p-4  mb-4 mt-8 mx-auto bg-[#b23a46] hover:bg-[#da1e37] text-white md:w-1/2 text-center rounded-full disabled:bg-[#e6ccb2] disabled:text-black">Перейти к оформлению заказа</button>
</template>

<template v-if="storeCart.cart.size==0">
<p class="text-center px-10 py-8">В корзине пока пусто</p>

<RouterLink class="bg-[#b23a46] text-white hover:bg-[da1e37] px-4 py-2 block mx-auto my-10 text-center rounded-full" to="/menu">Меню</RouterLink>
</template>

</div>

</template>

<style scoped>
</style>
