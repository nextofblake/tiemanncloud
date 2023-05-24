<template>
  <div ref="self" class="view view--blue">
    <ProfileContainer height="40vh" heading="Hello, I am Blake Tiemann" inked />
    <CardContainer>
      <VideoCard :src="servicesVideoSrc">
        <template #head> Services </template>
        <template #body>
          <ul class="bullet-list">
            <li>Lead Generation</li>
            <li>Web Development</li>
            <li>Google Marketing</li>
          </ul>
        </template>
      </VideoCard>
      <VideoCard :src="portfolioVideoSrc">
        <template #head> Portfolio </template>
        <template #body>
          <ul class="bullet-list">
            <li>6 Years Experience</li>
            <li>Full-Stack Development</li>
            <li>Product Management</li>
          </ul>
        </template>
      </VideoCard>
      <VideoCard :src="servicesVideoSrc">
        <template #head> About Me </template>
        <template #body>
          <ul class="bullet-list">
            <li>Versatile Entrepreneur</li>
            <li>UMKC Graduate</li>
            <li>Combat Sport Athelete</li>
          </ul>
        </template>
      </VideoCard>
      <template #centered>
        <form class="contact-form" @submit.prevent="submitForm">
          <h1>CONTACT ME</h1>

          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" placeholder="John Doe" required />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="john.doe@gmail.com"
              required
            />
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea
              id="message"
              v-model="message"
              placeholder="Let's connect!"
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </template>
    </CardContainer>
  </div>
</template>

<script>
import { inject } from 'vue'
import CardContainer from '../components/CardContainer.vue'
import ProfileContainer from '../components/ProfileContainer.vue'
import VideoCard from '../components/VideoCard.vue'

export default {
  name: 'HomeView',
  components: {
    CardContainer,
    VideoCard,
    ProfileContainer,
  },
  setup() {
    return {
      eventService: inject('eventService'),
      profileService: inject('profileService'),
    }
  },
  data() {
    return {
      servicesVideoSrc: 'services.mp4#t=2',
      portfolioVideoSrc: 'portfolio.mp4#t=1',
      aboutMeVideoSrc: 'rickroll.mp4#t=1',
      scrollService: null,
      name: '',
      email: '',
      message: '',
    }
  },
  mounted() {
    this.eventService.on('welcome', () => {
      const videos = document.querySelectorAll('video')
      videos.forEach((video) => {
        video.muted = true
        video.play()
      })
    })
  },
  methods: {
    submitForm() {
      // Validate the form data before submitting
      if (!this.name || !this.email || !this.message) {
        alert('Please fill in all fields')
        return
      }

      // Here, you can perform additional actions such as making an API request to submit the form data
      // For this example, we'll just log the form data to the console
      console.log('Form data:', {
        name: this.name,
        email: this.email,
        message: this.message,
      })

      // Reset the form fields after submission
      this.name = ''
      this.email = ''
      this.message = ''
    },
  },
}
</script>

<style>
@import '../assets/styles/core.css';

/* TODO move somewhere else */
.bullet-list {
  list-style-type: disc;
  margin: 0;
  padding: 0;
  padding-left: 40px;
  font-size: 24px;
}
.bullet-list li {
  margin-bottom: 10px;
}

/* Contact Form */
.contact-form {
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.contact-form h1 {
  padding: var(--global-viewPadding) 0;
  margin-right: auto;
}
.form-group {
  margin-bottom: var(--global-viewPadding);
  width: 100%;
}
label {
  display: none;
}
input,
textarea {
  font-family: var(--font-family-default);
  font-size: var(--font-size-lg);
  border-radius: var(--radius-md);

  /* width calc */
  padding: 8px;
  border: 2px solid var(--color-gray-3);
  width: calc(100% - 16px - 4px);
}
input:focus-visible,
textarea:focus-visible {
  border: 2px solid var(--color-orangelight);
  outline: none;
}
</style>
