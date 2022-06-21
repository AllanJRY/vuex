<template>
  <div class="orders">
    <h2 class="view-title">Vos commandes</h2>
    <table>
      <thead>
      <tr>
        <th>Commande</th>
        <th>Prix total</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="order in orders" :key="order.id">
        <td>{{ order.id }}</td>
        <td>{{ order.totalPrice }}€</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: "OrdersView",
  data() {
    return {
      orders: [],
    }
  }
}
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 0.5rem;
  }

  tbody {
    tr {
      border-bottom: 1px solid var(--secondary-color);
    }
  }
}
</style>