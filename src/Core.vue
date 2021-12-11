<template>
  <div class="view">
    <div class="overlay overlay--100">
      <button @click="next()">Click Me</button>
      <div class="overlay__swipe" />
    </div>

    <div class="overlay overlay--90">
      <video loop playsinline>
        <source :src="mp4Url" type="video/mp4" />
      </video>
      <div class="overlay__swipe" />
    </div>
  </div>
</template>

<script>
import { ScrollService } from "./services/ScrollService";

export default {
  name: "Core",
  data() {
    return {
      video: () => document.querySelector("video"),
      viewHeight: () => document.documentElement.clientHeight,
      viewport: () => document.scrollingElement || document.documentElement,
      mp4Url: "rickroll.mp4#t=1.5",
      scrollService: null,
    };
  },
  mounted() {
    // Register Service
    // @todo => app service container
    this.scrollService = new ScrollService(this.viewport);
    window.scrollService = this.scrollService

    // Service Commands
    this.scrollService.subject.subscribe(scrollTop => {
      if (scrollTop <= this.viewHeight() / 2)
        this.video().muted = true
      else if (this.video().muted)
        this.video().muted = false
    });
  },
  methods: {
    next() {
      this.video().muted = false;
      this.video().play()
      this.scrollService.moveTo(document.querySelector('.overlay--100').scrollHeight);
    }
  },
};
</script>

<style>
@import "./assets/styles/core.css";

.overlay {
  position: relative;
  height: 100vh;
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
