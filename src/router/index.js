import { createRouter, createWebHistory } from 'vue-router'

import Start from "../components/Start.vue"
import Menu from "../components/Menu.vue"
import MenuCat from "../components/MenuCat.vue"
import Product from "../components/Product.vue"
import Cart from "../components/Cart.vue"
import Client from "../components/Client.vue"
import Delivery from "../components/Delivery.vue"
import Acknow from "../components/Acknow.vue"
import Reserve from "../components/Reserve.vue"
import Contacts from "../components/Contacts.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path: "/",
    component: Start,
    meta: {transition: "fade"}
   },
   {
    path: "/menu",
    component: Menu,
    meta: {transition: "fade"}
   },
   {
    path: "/menu/:cat",
    component: MenuCat,
    meta: {transition: "fade"}
   },
   {
    path: "/menu/:cat/:id",
    component: Product,
    meta: {transition: "slide-left"}
   },
   {
    path: "/cart",
    component: Cart,
    meta: {transition: "slide-left"}
   },
   {
    path: "/client",
    component: Client,
    meta: {transition: "slide-next"}
   },
   {
    path: "/delivery",
    component: Delivery,
    meta: {transition: "slide-next"}
   },
   {
    path: "/acknow",
    component: Acknow,
    meta: {transition: "slide-next"}
   },
   {
    path: "/reserve",
    component: Reserve,
    meta: {transition: "fade"}
   },
   {
    path: "/contacts",
    component: Contacts,
    meta: {transition: "fade"}
   }
  ],
})

export default router
