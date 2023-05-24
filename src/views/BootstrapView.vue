<template>
  <div ref="self" class="view view--white"></div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'BootstrapView',
  setup() {
    return {
      fadeService: inject('fadeService'),
    }
  },
  mounted() {
    this.fadeService.apply(this.$refs.self)
  },
}
</script>
