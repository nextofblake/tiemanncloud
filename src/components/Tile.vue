<template>
  <div class="tile">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tile',
}
</script>

<style scoped>
.tile {
    height: 100vh;
    width: 100vw;
    background: #f3f3f3;
}
</style>
