<template>
  <div class="view" v-on:touchstart="handleTouchStart" v-on:touchend="handleTouchEnd">
    <div class="overlay overlay--100">
      <button @click="next()">Click Me</button>
      <div class="overlay__swipe" />
    </div>

    <div class="overlay overlay--90">
      <video autoplay muted>
        <source src="./assets/video/rickroll.mp4" type="video/mp4">
      </video>
      <div class="overlay__swipe" />
    </div>

    <div class="overlay overlay--80">
      HELLO
      <div class="overlay__swipe"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      video: () => null,
      viewHeight: () => null,
      view: () => null,
      slider: {
        scrollHeight: 0,
        overlayKey: 0,
        overlayStart: 0,
        overlayEnd: 2,
      },
      swipe: {
        startY: 0,
        endY: 0,
      }
    };
  },
  mounted() {
    this.video = () => document.querySelector("video")
    this.viewHeight = () => document.documentElement.clientHeight
    this.view = () => document.querySelector(".view")
    // this.load((blobUrl) => {
    //     this.video().src = blobUrl
    // })
  },
  methods: {
    handleClick(event) {
      console.log('click', event)
    },
    handleTouchStart(event) {
      console.log('start', event)
      this.swipe.startY = event.touches[0].clientY
    },
    handleTouchEnd(event) {
      console.log('end', event)
      this.swipe.endY = event.changedTouches[0].clientY

      const upSwipe = this.swipe.startY > this.swipe.endY
      if (upSwipe) {
        this.next()
      }
      else {
        this.back()
      }
    },
    next() {
      if (this.slider.overlayKey === this.slider.overlayEnd) return
      this.slider.overlayKey++

      const newHeight = this.slider.overlayKey * this.viewHeight()
      this.scrollBurn(newHeight)
      this.video().muted = false
      this.video().play()

    },
    back() {
      if (this.slider.overlayKey === this.slider.overlayStart) return
      this.slider.overlayKey--

      const newHeight = this.slider.overlayKey * this.viewHeight()
      this.scrollBurn(newHeight)
      this.video().muted = true
    },
    scrollBurn(height) {
      this.view().scrollTo(0, height)
      this.view().classList.add('view--freeze')
    }
  },
};
</script>

<style>
@import "./assets/styles/core.css";

.view {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  scroll-behavior: smooth;
}
.view--freeze {
  overflow: hidden;
}
.overlay {
  position: relative;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    135deg,
    var(--color-bluegreen) 0%,
    var(--color-blue) 74%
  );
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
}
.overlay--100 {
  z-index: 100;
}
.overlay--90 {
  z-index: 90;
  background: var(--color-black);
}
.overlay--80 {
  z-index: 80;
  background: pink;
}
.overlay__swipe {
  width: 30vw;
  height: 7px;
  background: var(--color-white);
  border-radius: 1rem;
  position: absolute;
  bottom: var(--global-viewPadding);
  transition: all 0.75s;
  z-index: 100;
}
</style>
