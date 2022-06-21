<template>
  <div class="cart">
    <h2 class="view-title">Votre panier</h2>
    <CartBikesList :items="cartProducts"/>
    <div class="cart-total-price">
      Prix total: <span class="total-price">{{ cartTotalPrice }}</span>€
    </div>
    <div class="confirm-order">
      <button :disabled="!canOrder" @click="saveOrder({products: cartProducts, totalPrice: cartTotalPrice})">Valider commande</button>
      <p v-if="insufficientFunds">Vous n'avez pas assez de fonds</p>
    </div>
  </div>
</template>

<script>
import CartBikesList from "@/components/cart/CartBikesList";
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  name: 'CartView',
  components: {CartBikesList},
  computed: {
    ...mapGetters([
      "cartProducts",
      "cartTotalPrice",
      "cartProductsCount",
      "funds",
    ]),
    insufficientFunds() {
      return this.funds < this.cartTotalPrice;
    },
    canOrder() {
      return !this.insufficientFunds && (this.cartProductsCount > 0);
    },
  },
  methods: {
    ...mapActions([
        "saveOrder",
    ]),
  },
}
</script>

<style lang="scss" scoped>
.cart {
  .cart-total-price {
    margin-top: 1rem;
    text-align: end;

    .total-price {
      margin: 0 1rem;
      font-size: 1.5rem;
      color: var(--primary-color);
    }
  }

  .confirm-order {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      margin-top: 1rem;
      color: var(--primary-color);
    }
  }
}
</style>