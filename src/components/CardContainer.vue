<template>
  <div
    ref="self"
    class="card-container"
    :style="{ minHeight: `calc(${minHeight} - var(--global-viewPadding) * 2)` }"
  >
    <div class="card-layout">
      <slot></slot>
    </div>
    <slot name="centered"></slot>
  </div>
</template>

<script>
export default {
  name: 'CardContainer',
  mounted() {},
  props: {
    minHeight: {
      type: String,
      default: '100%',
      required: false,
    },
  },
}
</script>

<style>
@import '../assets/styles/core.css';
.card-container {
  padding: var(--global-viewPadding);
  background-image: var(--gradient-dark);
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
