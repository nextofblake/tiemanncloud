<template>
  <div class="viewer" id="container" @click="scrollToBottom()">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Viewer',
  mounted() {
  },
  methods: {
    scrollToBottom() {
      // const container = this.$el;
      // container.scrollTop = window.innerHeight;
      // const container = this.$el.querySelector("#container");
      // console.log(container);
    }
  }
}
</script>

<style scoped>
.viewer {
  height: 100vh;
  width: 100vw;
  overflow: scroll;
}
</style>
