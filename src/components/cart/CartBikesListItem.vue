<template>
  <tr class="cart-bikes-list-item">
    <td>
      <font-awesome-icon
          icon="fa-solid fa-xmark"
          class="remove-btn"
          title="Retirer du panier"
          />
    </td>
    <td>{{ cartProduct.bike.name }}</td>
    <td>
      {{ cartProduct.quantity }}
    </td>
    <td class="price-cell">{{ cartProduct.bike.price }}€</td>
  </tr>
</template>

<script>

export default {
  name: "CartBikesListItem",
  props: {
    cartProduct: {
      type: Object,
      required: true,
    }
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