<template>
  <div class="view">
    <div class="overlay overlay--home" @click="prank()">

      <h1>Just Click This Button</h1>
      <button v-touch:swipe="hello()">Click Me</button>
      <div class="overlay__swipe"/>
    </div>

    <div class="overlay overlay--next">
      <!-- <video autoplay muted controls>
        <source src="./assets/video/rickroll.mp4" type="video/mp4">
      </video> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      video: () => null
    }
  },
  mounted() {
    this.video = () => document.querySelector('video')
    // this.load((blobUrl) => {
    //     this.video().src = blobUrl
    // })
  },
  methods: {
    load(callback) {
        const req = new XMLHttpRequest()
        req.open('GET', './assets/video/rickroll.mp4', true)
        req.responseType = 'blob'

        req.onload = function () {
          if (this.status === 200) {
            callback(URL.createObjectURL(this.response))
          }
        }

        req.send()
    },
    hello() {
      console.log('helloworld')
    },
    prank() {
        let overlay = document.querySelector('.overlay')
        let swipe = document.querySelector('.overlay__swipe')

        overlay.classList.add('overlay--evaporate')
        swipe.classList.add('overlay__swipe--evaporate')

        this.play()
    },
    play() {
      // this.video().muted = false
    }
  }
};
</script>

<style>
:root {
  --global-viewPadding: 15px;

  --color-white: #fff;
  --color-black: black;

  --radius-sm: 0.3rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
}
body {
  margin: 0;
  background: var(--color-black);
  font-family: "Roboto", sans-serif;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-image: linear-gradient(135deg, #abe9cd 0%, #3eadcf 74%);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: bottom 0.75s;
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
}
.overlay--home {
  z-index: 100;
}
.overlay--next {
  background: var(--color-black);
  z-index: 90;
}
.overlay--evaporate {
  bottom: 100vh;
}
.overlay--evaporate button,h1 {
  display: none;
}
.overlay__swipe {
  width: 30vw;
  height: 7px;
  background: var(--color-white);
  border-radius: 1rem;
  position: absolute;
  bottom: var(--global-viewPadding);
  transition: all 0.75s;
}
h1 {
  color: var(--color-white);
}
button {
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid var(--color-white);
  margin: 0 0.3em 0.3em 0;
  border-radius: var(--radius-sm);
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 300;
  font-size: 24px;
  color: var(--color-white);
  text-align: center;
  transition: all 0.2s;
  background-color: transparent;
}
button:hover {
  color: var(--color-black);
  background-color: var(--color-white);
}
video {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
