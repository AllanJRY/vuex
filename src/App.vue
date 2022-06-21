<template>
  <div id="app">
    <TheHeader />
    <main class="container-fluid">
      <router-view/>
    </main>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
export default {
  components: {TheHeader}
}
</script>

<style lang="scss">
:root {
  --primary-color: #B97375;
  --secondary-color: #2D2D34;
  --text-light-color: #E2DCDE;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button {
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color);
  padding: 0.5rem 1rem;
  color: var(--text-light-color);

  &:disabled {
    background-color: var(--text-light-color);
    border-color: var(--text-light-color);
    color: grey;
  }
}

.view-title {
  padding: 1rem 0;
  border-bottom: 1px solid var(--primary-color);
}
</style>