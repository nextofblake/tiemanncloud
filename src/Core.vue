<template>
  <HomeView v-if="showHome" />
  <WelcomeView @discover="showHome = true" />
  <BlankView />
</template>

<script>
import BlankView from './views/BlankView.vue'
import HomeView from './views/HomeView.vue'
import WelcomeView from './views/WelcomeView.vue'

export default {
  name: 'Core',
  components: {
    BlankView,
    HomeView,
    WelcomeView,
  },
  data() {
    return {
      servicesVideo: 'services.mp4',
      portfolioVideo: 'portfolio.mp4',
      name: '',
      message: '',
      showHome: false,
    }
  },
}
</script>

<style>
@import './assets/styles/core.css';
</style>
