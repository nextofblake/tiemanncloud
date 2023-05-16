<template>
  <div ref="self" class="view view--waterfall">
    <img
      v-if="profileService.loaded"
      :src="profileService.src"
      alt="Blake Tiemann"
      style="
        height: 30vh;
        display: inline-block;
        border-radius: var(--radius-50);
        object-fit: cover;
        border: 10px double var(--color-gray-1);
      "
    />
    <br />
    <div ref="welcomeText" class="typewriter">
      <h2>{{ welcomeLiveText }}</h2>
    </div>
    <br />
    <button
      v-if="welcomeButtonShown"
      ref="welcomeButton"
      class="button--unblended fade--in"
      @click="enter()"
    >
      Discover
    </button>
  </div>
</template>

<script>
import { inject } from 'vue'
import { interval, takeWhile } from 'rxjs'

export default {
  name: 'WelcomeView',
  data() {
    return {
      welcomeFullText: 'Hello, I am Blake Tiemann',
      welcomeLiveText: '',
      welcomeButtonShown: false,
    }
  },
  setup() {
    return {
      profileService: inject('profileService'),
      fadeService: inject('fadeService'),
    }
  },
  mounted() {
    this.profileService.load()
    this.runTypewriter()
  },
  methods: {
    enter() {
      this.$refs.welcomeButton.classList.remove('fade--in')
      this.fadeService.apply(this.$refs.welcomeButton, 'fast')
      this.fadeService.apply(this.$refs.welcomeText, 'fast')
      this.fadeService.apply(this.$refs.self, 'slow')
      this.$emit('discover')
    },
    runTypewriter() {
      interval(50)
        .pipe(
          takeWhile((i) => {
            return i <= this.welcomeFullText.length
          })
        )
        .subscribe((i) => {
          this.welcomeLiveText += this.welcomeFullText.charAt(i)

          if (i === this.welcomeFullText.length) {
            this.welcomeButtonShown = true
          }
        })
    },
  },
}
</script>

<style>
@import '../assets/styles/core.css';
</style>
