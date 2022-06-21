import Vue from 'vue'
import VueRouter from 'vue-router'
import BikesView from "@/views/BikesView";
import CartView from "@/views/CartView";
import OrdersView from "@/views/OrdersView";
import NotFoundView from "@/views/NotFoundView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'bikes',
    component: BikesView,
    alias: '/bikes'
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrdersView,
  },
  {
    path: '*',
    name: '404',
    component: NotFoundView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
