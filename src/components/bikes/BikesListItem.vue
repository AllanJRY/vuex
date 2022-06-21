<template>
  <div class="bike-card">
    <img src="../../assets/vtt.jpg" alt="" class="bike-card-img">
    <div class="bike-card-content">
      <div class="bike-card-content-desc">
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
      </div>
      <div class="bike-card-content-bottom">
        <div class="price">
          {{item.price}} €
        </div>
        <button @click="addBikeToCart(item)">Ajouter au panier</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "BikesListItem",
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
  methods: {
    ...mapMutations([
        "addBikeToCart",
    ])
  }
}
</script>

<style lang="scss" scoped>
.bike-card {
  display: flex;
  flex-direction: column;
  color: var(--text-light-color);
  background-color: var(--secondary-color);

  .bike-card-img {
    height: 300px;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  .bike-card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    height: 100%;

    .bike-card-content-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .price {
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
  }
}
</style>