<template>
  <div class="screen">
    <div id="view--dawn" class="view"></div>
    <div id="view--load" class="view view--waterfall">
      <div style="position: relative">
        <img
          :src="profileSrc"
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
      <div id="welcome-text" class="typewriter">
        <h2>{{ welcomeLiveText }}</h2>
      </div>
    </div>
    <div id="view--home" class="view view--waterfall view--blue">
      <img
        :src="profileSrc"
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
      <CardViewer>
        <Card>
          <template #head>
            <video controls loop playsinline>
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
            <video controls loop playsinline>
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
  </div>
</template>

<script>
import Card from './components/Card.vue'
import CardViewer from './components/CardViewer.vue'
import { interval } from 'rxjs'
import { takeWhile } from 'rxjs/operators'

export default {
  name: 'Core',
  components: {
    Card,
    CardViewer,
  },
  data() {
    return {
      welcomeFullText: 'Hello, I am Blake Tiemann',
      welcomeLiveText: '',
      profileSrc: 'blake_profile.png',
      name: '',
      message: '',
      servicesVideoSrc: 'services.mp4#t=2',
      portfolioVideoSrc: 'portfolio.mp4#t=1',
    }
  },
  mounted() {
    const image = new Image()
    image.onload = this.afterLoaded
    image.src = this.profileSrc
  },
  methods: {
    afterLoaded() {
      const viewDawn = document.getElementById('view--dawn')
      const viewLoad = document.getElementById('view--load')
      const welcomeText = document.getElementById('welcome-text')

      interval(75)
        .pipe(
          takeWhile((i) => {
            return i <= this.welcomeFullText.length
          })
        )
        .subscribe((i) => {
          this.welcomeLiveText += this.welcomeFullText.charAt(i)

          if (i === 0) {
            this.fadeOut(viewDawn, 'fade--out')
          }
          if (i === this.welcomeFullText.length) {
            this.fadeOut(welcomeText, 'fade--out-fast')
            this.fadeOut(viewLoad, 'fade--out-slow')
          }
        })
    },
    submitForm() {
      // Here you can add code to submit the form data to the server
      console.log('Name:', this.name)
      console.log('Message:', this.message)
    },
  },
}
</script>

<style>
@import './assets/styles/core.css';
/* Contact Form */
.contact-form {
  background-image: linear-gradient(135deg, var(--color-white) 0%, var(--color-offwhite) 74%);
  width: 80%;
  height: 500px;
}
/* TODO */
.todo-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.todo-item {
  cursor: pointer;
}

input[type='checkbox'] {
  position: absolute;
  opacity: 0;
}

label {
  display: inline-block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 12px;
}

label:before {
  content: '';
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

label:after {
  content: '';
  display: inline-block;
  position: absolute;
  left: 6px;
  top: 2px;
  width: 7px;
  height: 12px;
  border: solid var(--color-black);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  opacity: 0;
  transition: all 0.3s ease;
}

input[type='checkbox']:checked + label:before {
  background-color: var(--color-orangelight);
  border-color: var(--color-orangelight);
}

input[type='checkbox']:checked + label:after {
  opacity: 1;
}
</style>
