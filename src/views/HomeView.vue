<template>
  <div ref="self" class="view view--waterfall view--blue">
    <div style="position: relative">
      <img
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
    </div>
    <br />
    <CardViewer>
      <Card>
        <template #head>
          <video loop playsinline>
            <source :src="servicesVideoSrc" type="video/mp4" />
          </video>
        </template>
        <template #body>
          <div class="todo-list">
            <div class="todo-item">
              <input type="checkbox" id="todo-item-1" checked />
              <label for="todo-item-1">Fullstack web development</label>
            </div>

            <div class="todo-item">
              <input type="checkbox" id="todo-item-2" checked />
              <label label for="todo-item-2">Search Engine Optimization (SEO)</label>
            </div>
          </div>
        </template>
        <template #footer></template>
      </Card>
      <Card>
        <template #head>
          <video loop playsinline>
            <source :src="portfolioVideoSrc" type="video/mp4" />
          </video>
        </template>
        <template #body>
          <a href="https://nextdaypersonalloan.com/">Next Day Personal Loan</a>,
          <a href="https://coach.nukshuk.com/">Coach Nukshuk</a>,
          <a href="https://afill.com/">Afill</a>,
          <a href="https://huntinglocator.com">Hunting Locator</a>,
          <a href="https://www.snapfi.com/">Snapfi</a>
        </template>
        <template #footer></template>
      </Card>
      <Card>
        <template #head> About Me </template>
        <template #body>
          <p>
            From ideation to implementation, I have had extensive experience progressing projects
            from start to finish.
          </p>
        </template>
        <template #footer> </template>
      </Card>
    </CardViewer>
  </div>
</template>

<script>
import { inject } from 'vue'
import Card from '../components/Card.vue'
import CardViewer from '../components/CardViewer.vue'

export default {
  name: 'HomeView',
  components: {
    Card,
    CardViewer,
  },
  setup() {
    return {
      profileService: inject('profileService'),
    }
  },
  data() {
    return {
      servicesVideoSrc: 'services.mp4#t=2',
      portfolioVideoSrc: 'portfolio.mp4#t=1',
    }
  },
  mounted() {
    const videos = document.querySelectorAll('video')
    videos.forEach((video) => {
      video.muted = false
      video.play()
    })
  },
}
</script>

<style>
@import '../assets/styles/core.css';
</style>
