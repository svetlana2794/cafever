import { defineStore } from "pinia"

export const useCartStore=defineStore("cart", {
state: () => ({cart: new Map()}),

getters: {
total() {
let total=0
for (let elem of this.cart.values()) {
total+=this.sum(elem)*elem.quantity
}
return total
}
},

actions: {
addCart(id, el) {
this.cart.set(id, el)
},

removeInCart(id) {
this.cart.delete(id)
},

clearCart() {
this.cart.clear()
},

sum(prod) {
let sum=prod.price
prod.adds.forEach(price => sum+=price)
return sum
},
}
})
