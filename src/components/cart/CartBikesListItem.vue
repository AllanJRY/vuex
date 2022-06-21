<template>
  <tr class="cart-bikes-list-item">
    <td>
      <font-awesome-icon
          icon="fa-solid fa-xmark"
          class="remove-btn"
          title="Retirer du panier"
          @click="removeBikeFromCart({bike: cartProduct.bike, quantity: cartProduct.quantity})"/>
    </td>
    <td>{{ cartProduct.bike.name }}</td>
    <td>
      <input type="number" v-model="cartProductQuantity">
    </td>
    <td class="price-cell">{{ cartProduct.bike.price }}€</td>
  </tr>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "CartBikesListItem",
  props: {
    cartProduct: {
      type: Object,
      required: true,
    }
  },
  computed: {
      cartProductQuantity: {
        get() {
          return this.cartProduct.quantity;
        },
        set(quantity) {
          this.updateBikeFromCart({bike: this.cartProduct.bike, quantity: quantity < 0 ? 0 : quantity })
        },
      }
  },
  methods: {
    ...mapMutations([
      "removeBikeFromCart",
      "updateBikeFromCart",
    ]),
  },
}
</script>

<style lang="scss" scoped>
.cart-bikes-list-item {
  width: 100%;
  border-bottom: 1px solid var(--secondary-color);

  td,
  th {
    padding: 1rem;

    .remove-btn {
      cursor: pointer;
    }
  }

  .price-cell {
    text-align: end;
  }
}
</style>