<template>
  <div ref="self" class="card-container">
    <div class="card-layout">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardContainer',
  mounted() {},
}
</script>

<style>
.card-container {
  width: 100%;
  height: 63vh;
  padding: var(--global-viewPadding) 0;
  background-image: linear-gradient(
    175.6deg,
    var(--color-gray-7) 44.98%,
    var(--color-gray-9) 121.15%
  );
}
.card-layout {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 0 auto;
  max-width: 1600px; /* Desktop */
}
</style>
