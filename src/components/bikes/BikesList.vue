<template>
  <ul class="p-0 bikes-list">
    <BikesListItem v-for="bike in bikes" :key="bike.id" :item="bike" class="bikes-list-item"/>
  </ul>
</template>

<script>
import {mapGetters} from "vuex";
import BikesListItem from "@/components/bikes/BikesListItem";

export default {
  name: "BikesList",
  components: {BikesListItem},
  computed: {
    ...mapGetters([
      'bikes'
    ]),
  },
}
</script>

<style lang="scss" scoped>
.bikes-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .bikes-list-item {
    width: 100%;
  }
}

@media screen and (min-width: 600px) {
  .bikes-list {
    flex-direction: row;
    flex-wrap: wrap;

    .bikes-list-item {
      width: calc(100%/2 - 0.5rem);
    }
  }
}

@media screen and (min-width: 1000px) {
  .bikes-list {
    .bikes-list-item {
      width: calc(100%/4 - 0.8rem);
    }
  }
}
</style>