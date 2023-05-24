<template>
  <div ref="self" class="view">
    <ProfileContainer
      height="40vh"
      heading="Hello, I am Blake Tiemann"
      cta="Discover"
      @action="enter()"
    />
  </div>
</template>

<script>
import { inject } from 'vue'
import ProfileContainer from '../components/ProfileContainer.vue'

export default {
  name: 'WelcomeView',
  components: {
    ProfileContainer,
  },
  setup() {
    return {
      eventService: inject('eventService'),
      fadeService: inject('fadeService'),
      profileService: inject('profileService'),
    }
  },
  methods: {
    enter() {
      // this.$refs.welcomeButton.classList.remove('fade--in')
      // this.fadeService.apply(this.$refs.welcomeButton, 'fast')
      // this.fadeService.apply(this.$refs.welcomeText, 'fast')
      this.fadeService.apply(this.$refs.self, 'slow')
      this.$emit('welcome')
      this.eventService.fire('welcome')
    },
  },
}
</script>

<style scoped>
@import '../assets/styles/core.css';
</style>
