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
@import '../assets/styles/core.css';
.card-container {
  padding: var(--global-viewPadding);
  background-image: linear-gradient(
    175.6deg,
    var(--color-gray-7) 44.98%,
    var(--color-gray-9) 121.15%
  );
  width: 100%;
}
.card-layout {
  display: grid;
  gap: var(--global-viewPadding);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 0 auto;
  max-width: 1600px; /* Desktop */
}

/* Mobile */
@media screen and (max-width: 1000px) {
  .card-layout {
    grid-template-columns: auto;
  }
}
</style>
