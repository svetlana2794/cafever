import { defineStore } from "pinia"
import { useCartStore } from "./storeCart"

export const useOrderStore=defineStore("order", {
state: () => ({
client: null,
address: null,
status: "loading",
numOrder: ""
}),

getters: {},

actions: {
addClient(obj) {
this.client=obj
},

addAddr(obj) {
this.address=obj
},

async sendOrder() {
const store=useCartStore()
store.cart.forEach((elem) => {
let newAdds=Object.fromEntries(elem.adds.entries())
elem.adds=newAdds
})
let newCart=Object.fromEntries(store.cart.entries())
const order={cart: newCart, client: this.client, address: this.address}
try {
setTimeout(() => {
this.numOrder=Math.floor(Math.random()*1000000)
this.status="ok"
}, 3000)
} catch {
this.status="error"
}
},
}
})
