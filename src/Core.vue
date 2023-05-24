<template>
  <HomeView v-show="showHome" />
  <WelcomeView @welcome="showHome = true" />
  <BootstrapView />
</template>

<script>
import BootstrapView from './views/BootstrapView.vue'
import HomeView from './views/HomeView.vue'
import WelcomeView from './views/WelcomeView.vue'

export default {
  name: 'Core',
  components: {
    BootstrapView,
    HomeView,
    WelcomeView,
  },
  data() {
    return {
      showHome: false,
    }
  },
}
</script>

<style>
@import './assets/styles/core.css';
</style>
