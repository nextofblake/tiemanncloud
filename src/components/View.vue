<template>
  <div id="view">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'View',
}
</script>

<style scoped>
#view {
  height: 100vh;
  width: 100vw;
}
</style>
