<template>
  <div class="bikes">
    <h2 class="view-title">Les vélos disponibles</h2>
    <BikesList />
  </div>
</template>

<script>
import BikesList from "@/components/bikes/BikesList";

export default {
  name: 'HomeView',
  components: {
    BikesList
  },
}
</script>

<style lang="scss" scoped>

</style>