<template>
  <header>
    <nav>
      <router-link :to="{name: 'bikes'}">Les vélos</router-link>
      <div class="nav-right-items">
        <router-link :to="{name: 'cart'}">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" /> Panier (0)
        </router-link>
        <router-link :to="{name: 'orders'}">Mes commandes</router-link>
        <div class="funds">
          Mes fonds : 0€
        </div>
      </div>
    </nav>
  </header>
</template>

<script>

export default {
  name: "TheHeader",
}
</script>

<style lang="scss" scoped>
header {
  height: 60px;
  background-color: var(--secondary-color);

  nav {
    display: flex;
    justify-content: space-between;
    height: 100%;

    a {
      padding: 1rem;
      color: var(--text-light-color);
      text-decoration: none;

      &:hover, &.router-link-exact-active {
        background-color: var(--primary-color);
      }
    }

    .funds {
      padding: 1rem;
      color: var(--primary-color);
      background-color: var(--text-light-color);
    }

    .nav-right-items {
      display: flex;
    }
  }
}
</style>