<template>
  <div class="viewer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CardViewer',
  mounted() {},
}
</script>

<style>
.viewer {
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
}

.card {
  width: calc(33.33% - 10px);
  margin-right: 15px;
  margin-bottom: 15px;
  box-sizing: border-box;
}
</style>
