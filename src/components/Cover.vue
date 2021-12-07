<template>
  <div class="cover">
    <div class="cover__head">
        <h1>Blake Tiemann</h1>
    </div>
    <div class="cover__body">
        <button @click="action()">See More...</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cover',
  emits: {
    stop: null
  },
  methods: {
    action() {
        document.querySelector('.cover').classList.add('cover--evaporate')
        this.$emit('stop', true)
    }
  }
}
</script>

<style scoped>
    .cover {
        background: rgba(100, 100, 100, 0.5);
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        transition: all 0.5s;

        display: grid;
        grid-template-columns: auto;
        grid-template-rows: 1fr 5fr;
    }
    .cover--evaporate {
        bottom: 100vh;
    }
    .cover__head h1 {
        font-size: 36px;
        padding: 15px;
    }
    .cover__body {
        display: flex;
        justify-content: flex-end;
    }
</style>
