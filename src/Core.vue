<template>
  <div class="view">
    <div class="overlay overlay--100">
      <span>{{ test1 }}</span>
      <span>{{ videoVolume }}</span>
      <span>{{ scrollScreen }}</span>

      <button @click="next()">Click Me</button>
      <div class="overlay__swipe" />
    </div>

    <div class="overlay overlay--90">
      <video autoplay muted loop playsinline :volume="videoVolume">
        <source src="./assets/video/rickroll.mp4#t=1" type="video/mp4" />
      </video>
      <div class="overlay__swipe" />
    </div>
  </div>
</template>

<script>
import { TouchService } from "./services/TouchService";
import { AudioService } from "./services/AudioService";

export default {
  name: "Core",
  data() {
    return {
      video: () => null,
      viewHeight: () => null,
      viewport: () => document.scrollingElement || document.documentElement,
      videoVolume: 1,
      scrollScreen: 0,
      touchService: null,
      audioService: null,
      test1: 0,
      track: null,
      context: null,
      gainNode: null
    };
  },
  mounted() {
    this.video = () => document.querySelector("audio");
    this.viewHeight = () => document.documentElement.clientHeight;

    this.audioService = new AudioService('./rickroll.mp3');
    this.touchService = new TouchService(this.viewport());
    this.touchService.scrollSubject.subscribe((top) => {
      this.test1 = top;
      this.handleScroll(top);
    });
  },
  methods: {
    handleScroll(scrollTop) {
      const viewHeight = this.viewHeight();
      // console.clear()
      // console.log('onScroll', scrollTop)

      this.videoVolume = scrollTop / viewHeight;
      this.audioService.volume = this.videoVolume
      this.scrollScreen = Math.round(scrollTop / viewHeight);
    },
    scrollTo(target) {
      this.viewport().scrollTo({
        top: target,
        behavior: "smooth",
      });
    },
    next() {
      this.audioService.play()

      this.scrollTo((this.scrollScreen + 1) * this.viewHeight());
    },
  },
};
</script>

<style>
@import "./assets/styles/core.css";

.overlay {
  position: relative;
  height: 100vh;
  width: 100vw;
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
.overlay > * {
  margin-left: var(--global-viewPadding);
  margin-right: var(--global-viewPadding);
}
.overlay--100 {
  z-index: 100;
}
.overlay--90 {
  z-index: 90;
  background: var(--color-black);
}
.overlay__swipe {
  width: 30vw;
  height: 7px;
  background: var(--color-white);
  border-radius: var(--radius-lg);
  position: absolute;
  bottom: var(--global-viewPadding);
  transition: all 0.75s;
  z-index: 100;
}
</style>
