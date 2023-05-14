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
            border: 10px double var(--color-gray-0);
          "
        />
      </div>
      <br />
      <div div class="typewriter">
        <h2>{{ ctaOutput }}</h2>
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
          border: 10px double var(--color-gray-0);
        "
      />
      <br />
      <CardViewer>
        <Card>
          <template #head> Services </template>
          <template #body>
            <div class="todo-list">
              <div class="todo-item">
                <input type="checkbox" id="todo-item-1" checked />
                <label for="todo-item-1">Build websites</label>
              </div>

              <div class="todo-item">
                <input type="checkbox" id="todo-item-2" checked />
                <label label for="todo-item-2">Search Engine Optimization (SEO)</label>
              </div>

              <div class="todo-item">
                <input type="checkbox" id="todo-item-3" checked />
                <label for="todo-item-3">Build websites for clients</label>
              </div>
            </div>
          </template>
          <template #footer></template>
        </Card>
        <Card>
          <template #head> Porfolio </template>
          <template #body>
            <a href="https://nextdaypersonalloan.com/">Next Day Personal Loan</a> <br />
            <a href="https://coach.nukshuk.com/">Coach Nukshuk</a> <br />
            <a href="https://afill.com/">Afill</a> <br />
            <a href="https://huntinglocator.com">Hunting Locator</a> <br />
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

export default {
  name: 'Core',
  components: {
    Card,
    CardViewer,
  },
  data() {
    return {
      ctaText: 'Hello, I am Blake Tiemann',
      ctaOutput: '',
      profileSrc: 'blake_profile.png',
    }
  },
  mounted() {
    const image = new Image()
    image.onload = this.afterDawn
    image.src = this.profileSrc
  },
  methods: {
    afterDawn() {
      const viewStart = document.getElementById('view--dawn')
      viewStart.classList.add('view--fade')

      let i = 0
      const typeInterval = setInterval(() => {
        this.ctaOutput += this.ctaText.charAt(i)
        i++
        if (i > this.ctaText.length) {
          clearInterval(typeInterval)
          this.afterLoad()
        }
      }, 100)
    },
    afterLoad() {
      const viewLoad = document.getElementById('view--load')
      viewLoad.classList.add('view--fade')
    },
  },
}
</script>

<style>
@import './assets/styles/core.css';

/* Login */
.screen {
  height: 100vh;
  width: 100vw;
  position: relative;
}
.view {
  background: var(--color-white);
  position: absolute;
  height: 100%;
  width: 100%;
}
.view--fade {
  animation: fadeOut 1s forwards;
}
.view--waterfall {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  /* padding: var(--global-viewPadding);/ */
}
.view--blue {
  background-image: linear-gradient(135deg, var(--color-bluegreen) 0%, var(--color-blue) 74%);
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
  }
}
#view--dawn {
  z-index: 100;
}
#view--load {
  z-index: 95;
}
#view--home {
  z-index: 90;
}
/* Type Writer */
.typewriter {
  font-family: monospace;
  font-size: 1.2rem;
  overflow: hidden;
  border-right: 0.15em solid #666;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: blink 0.5s step-end infinite;
}

@keyframes blink {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #666;
  }
}
/* TODO */
.todo-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.todo-item {
  cursor: pointer;
  font-size: 20px;
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
