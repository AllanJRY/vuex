import Vue from 'vue'
import Vuex from 'vuex'
import bikes from "@/store/modules/bikes";
import cart from "@/store/modules/cart";
import wallet from "@/store/modules/wallet";
import orders from "@/store/modules/orders";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    bikes,
    cart,
    wallet,
    orders,
  }
})
