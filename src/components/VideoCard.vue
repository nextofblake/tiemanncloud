<template>
  <div class="card">
    <div class="card-head">
      <div class="card-head--overlay">
        <slot name="head"></slot>
      </div>
      <video ref="video" loop playsinline>
        <source :src="src" type="video/mp4" />
      </video>
    </div>
    <div class="card-body">
      <slot name="body"></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoCard',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.$refs.video.muted = true
    this.$refs.video.play()
  },
}
</script>

<style scoped>
.card {
  background-image: var(--gradient-white);
  border-radius: var(--radius-md);
  width: 100%;
  box-shadow: 1px 2px 6px rgba(164, 175, 189, 0.32);
}
.card-shadow {
  box-shadow: 3px 3px 5px var(--color-gray-6);
}
.card.transparent {
  background: transparent;
  border: 1px solid var(--color-gray-2);
}
.card-head {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.5rem;
  font-family: var(--font-family-big);
  color: var(--color-gray-7);
  border-bottom: 3px solid var(--color-gray-3);
  border-radius: var(--radius-md) var(--radius-md) 0 0;
}
.card-head + .card-body {
  padding-top: 10px;
}
.card-body {
  padding: 10px;
}
.card-footer {
  padding: 6px 10px;
}

/* 
 * Video Cards 
 * - needed to apply styling directly to the video slot
 */
.card-head > * {
  border-radius: var(--radius-md) var(--radius-md) 0 0;
}

.card-head--overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: var(--color-gray-3);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
