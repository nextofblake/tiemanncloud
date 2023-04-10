<template>
  <div class="view">
    <div class="overlay overlay--100">
      <button @click="next()">Blake Tiemann</button>
      <br />
      <img
        src="blake_jumbo.png"
        style="
          height: 40vh;
          display: inline-block;
          border-radius: var(--radius-50);
          object-fit: cover;
          border: 10px double var(--color-gray-0);
        "
      />
      <br />
      <div class="card" style="height: 300px; max-width: 500px">
        <div
          class="card-head"
          style="
            font-size: 2.5rem;
            font-family: var(--font-family-big);
            color: var(--color-gray-7);
            border-bottom: 3px solid var(--color-gray-3);
          "
        >
          Todo List
        </div>
        <div class="card-body">
          <div class="todo-list">
            <div class="todo-item">
              <input type="checkbox" id="todo-item-1" checked />
              <label for="todo-item-1">Create a personal website</label>
            </div>

            <div class="todo-item">
              <input type="checkbox" id="todo-item-2" checked />
              <label label for="todo-item-2">Register for Upwork</label>
            </div>

            <div class="todo-item">
              <input type="checkbox" id="todo-item-3" />
              <label for="todo-item-3">Build websites for clients</label>
            </div>

            <div class="todo-item">
              <input type="checkbox" id="todo-item-4" />
              <label for="todo-item-4">Profit 💰💰💰</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay overlay--90">
      <video loop playsinline>
        <source :src="mp4Url" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
import { ScrollService } from './services/ScrollService'

export default {
  name: 'Core',
  data() {
    return {
      video: () => document.querySelector('video'),
      viewHeight: () => document.documentElement.clientHeight,
      viewport: () => document.scrollingElement || document.documentElement,
      mp4Url: 'rickroll.mp4#t=1.5',
      scrollService: null,
    }
  },
  mounted() {
    // Register Service
    // @todo => app service container
    this.scrollService = new ScrollService(this.viewport)
    window.scrollService = this.scrollService
    // Service Commands
    this.scrollService.subject.subscribe((scrollTop) => {
      if (scrollTop <= this.viewHeight() / 2) this.video().muted = true
      else if (this.video().muted) this.video().muted = false
    })
  },
  methods: {
    next() {
      this.video().muted = false
      this.video().play()
      this.scrollService.moveTo(document.querySelector('.overlay--100').scrollHeight)
    },
  },
}
</script>

<style>
@import './assets/styles/core.css';

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

.card {
  background: var(--gradient-white);
  border-radius: var(--radius-md);
  width: 100%;
  box-shadow: 1px 2px 6px rgba(164, 175, 189, 0.32);
}
.card.transparent {
  background: transparent;
  border: 1px solid var(--color-gray-2);
}
.card-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
}
.card-head + .card-body {
  padding-top: 10px;
}
.card-body {
  padding: 10px;
}
.card-footer {
  padding: 6px 10px;
}
.page {
  background-image: linear-gradient(135deg, var(--color-bluegreen) 0%, var(--color-blue) 74%);
  min-height: 70vh;
}
.overlay {
  position: relative;
  height: 100vh;
  background-image: linear-gradient(135deg, var(--color-bluegreen) 0%, var(--color-blue) 74%);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  padding: var(--global-viewPadding);
}
.overlay--100 {
  z-index: 100;
}
.overlay--90 {
  z-index: 90;
  background: var(--color-black);
  justify-content: center;
}
.overlay__swipe {
  width: 30vw;
  height: 7px;
  background: var(--color-white);
  border-radius: var(--radius-lg);
  position: absolute;
  bottom: var(--global-viewPadding);
  transition: all 0.75s;
  z-index: 100;
}
</style>
