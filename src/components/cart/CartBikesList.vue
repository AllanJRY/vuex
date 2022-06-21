<template>
  <table class="cart-bikes-list p-0">
    <thead>
    <tr>
      <th></th>
      <th>Nom</th>
      <th>Quantité</th>
      <th class="price-cell">Prix</th>
    </tr>
    </thead>
    <tbody>
    <CartBikesListItem v-for="cartProduct in items" :key="cartProduct.bike.id" :cart-product="cartProduct" />
    </tbody>
  </table>
</template>

<script>
import CartBikesListItem from "@/components/cart/CartBikesListItem";

export default {
  name: "CartBikesList",
  components: {CartBikesListItem},
  props: {
    items: Array,
  }
}
</script>

<style lang="scss" scoped>
.cart-bikes-list {
  width: 100%;

  td,
  th {
    padding: 1rem;
  }

  thead {
    tr {
      background-color: #B97375;
      color: var(--text-light-color);

      .price-cell {
        text-align: end;
      }
    }
  }

}
</style>