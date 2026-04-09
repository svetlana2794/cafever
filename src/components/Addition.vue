<script setup>
import { ref, watch } from "vue"
const {newElem}=defineProps(['newElem'])

const emit=defineEmits(["handleAdd"])

const addProds=ref(null)

watch(
addProds,
async () => {
try {
 const response=await fetch("/data/add.json")
 addProds.value=await response.json()
} catch (err) {
 addProds.value=err
}
},
{immediate: true}
)
</script>

<template>
<ul class="text-base">
<li v-for="item in addProds" :key="item.id" class="my-4 flex justify-between items-center">

<span class="grow">{{item.name}}</span>

<span class="font-black">{{item.price}} руб.</span>

<button @click="emit('handleAdd', item.name, item.price)" :disabled="newElem.adds.has(item.name)" class="text-white rounded-md p-2 bg-[#b23a46] hover:bg-[#da1e37] disabled:bg-[#e6ccb2] disabled:text-black shrink-0">{{newElem.adds.has(item.name) ? 'Добавлено' : 'Добавить'}}</button>
</li>
</ul>
</template>

<style scoped>
</style>
