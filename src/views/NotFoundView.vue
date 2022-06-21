<template>
  <div class="page-not-found">
    <h1>
      <span class="error-code">404</span>
      <span class="error-text">Page Not Found</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: "NotFoundView",
}
</script>

<style lang="scss" scoped>
.page-not-found {
  position: fixed;
  top: 70px;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;

    .error-code {
      font-size: 10rem;
      color: var(--primary-color);
    }

    .error-text {
      color: var(--secondary-color);
    }
  }
}
</style>