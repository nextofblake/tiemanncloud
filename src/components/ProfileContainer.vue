<template>
  <div class="profile-grid" :style="{ height: height }">
    <!-- Row 1 -->
    <div style="position: relative; overflow: hidden">
      <img
        v-if="profileService.loaded"
        :src="profileService.src"
        class="profile-img"
        alt="Blake Tiemann"
      />
    </div>
    <!-- Row 2 -->
    <div v-if="!inked" class="typewriter">
      <h2>{{ liveHeading }}</h2>
    </div>
    <div v-if="inked" class="typewriter--inked">
      <h2>{{ heading }}</h2>
    </div>
    <!-- Row 3 -->
    <button
      v-if="showCta"
      ref="welcomeButton"
      class="button--unblended fade--in"
      @click="handleClick()"
    >
      {{ cta }}
    </button>
  </div>
</template>

<script>
import { inject } from 'vue'
import { interval, takeWhile } from 'rxjs'

export default {
  name: 'ProfileContainer',
  props: {
    height: {
      type: String,
      default: '100%',
      required: true,
    },
    heading: {
      type: String,
      default: '',
    },
    inked: {
      type: Boolean,
      default: false,
    },
    cta: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {
      profileService: inject('profileService'),
      fadeService: inject('fadeService'),
    }
  },
  data() {
    return {
      liveHeading: '',
      showCta: false,
    }
  },
  mounted() {
    this.profileService.load()
    this.runTypewriter()

    // this.welcomeButtonShown = true // @todo - remove in live env
    // setTimeout(this.enter, 10) // @todo - remove in live env
  },
  methods: {
    handleClick() {
      this.$refs.welcomeButton.classList.remove('fade--in')
      this.fadeService.apply(this.$refs.welcomeButton, 'fast')
      this.$emit('action')
    },
    runTypewriter() {
      interval(2)
        .pipe(
          takeWhile((i) => {
            return i <= this.heading.length
          })
        )
        .subscribe((i) => {
          this.liveHeading += this.heading.charAt(i)

          if (i === this.heading.length) {
            this.showCta = true
          }
        })
    },
  },
}
</script>

<style scoped>
@import '../assets/styles/core.css';
.profile-container {
  padding: var(--global-viewPadding);
}
.profile-grid {
  display: grid;
  grid-template-rows:
    calc(100% - var(--global-viewPadding) - var(--font-size-lg))
    var(--font-size-lg)
    min-content;
  justify-items: center;
  grid-gap: var(--global-viewPadding);
}
.profile-img {
  height: calc(100% - 20px);
  display: inline-block;
  border-radius: var(--radius-50);
  object-fit: cover;
  border: 10px double var(--color-gray-1);
}
/* Mobile */
/* @media screen and (max-width: 1000px) {
  .card-layout {
    grid-template-columns: auto;
  }
} */
</style>
