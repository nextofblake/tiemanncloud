<template>
  <div ref="self" class="card" @mouseenter="mouseEnter" @mouseleave="mouseLeave" @click="play">
    <div class="card-head">
      <div class="card-head--overlay">
        <svg
          v-if="showPlayButton"
          class="card-head--overlay-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"
          />
        </svg>
        <slot name="head"></slot>
      </div>
      <video ref="video" :controls="enableControls" loop playsinline>
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
  data() {
    return {
      showPlayButton: false,
      enableControls: false,
    }
  },
  mounted() {
    this.$refs.video.muted = true
    this.$refs.video.play()
  },
  methods: {
    mouseEnter() {
      this.enableControls = true
      this.$refs.video.muted = false
      this.$refs.self.classList.add('card--hovering')
      this.$refs.video.currentTime = 0
      this.$refs.video.play()
    },
    mouseLeave() {
      this.enableControls = false
      this.$refs.video.muted = true
      this.$refs.self.classList.remove('card--hovering')
    },
  },
}
</script>

<style scoped>
.card {
  background-image: var(--gradient-white);
  border-radius: var(--radius-md);
  width: 100%;
  /* box-shadow: 1px 2px 6px rgba(164, 175, 189, 0.32); @todo - not included for this background*/
  transition: transform 1s ease; /* Hover effect */
}
.card--hovering {
  transform: scale(1.08);
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
.card--hovering .card-head--overlay {
  opacity: 0;
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
.card-head--overlay-icon {
  height: 80px;
}
</style>
