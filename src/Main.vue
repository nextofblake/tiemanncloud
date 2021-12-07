<template>
  <div class="overlay">
    <h1>Just Click This Button</h1>
    <button @click="prank()">Click Me</button>
  </div>

  <div>
    <iframe
      class="video"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ?mute=1&amp;controls=0&amp;showinfo=0&amp;autoplay=0"
      title="You Got Rick Rolled"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <audio class="audio" autoplay loop>
      <source src="./assets/audio/never_gonna_give_you_up.mp3" type="audio/mp3" />
    </audio>
  </div>
</template>

<script>
export default {
  name: "Main",
  mounted() {
  },
  methods: {
    prank() {
        var overlay = document.querySelector('.overlay')
        overlay.classList.add('overlay--evaporate')

        var audio = document.querySelector('.audio')
        audio.play()

        var video = document.querySelector('.video')
        video.src = video.src.slice(0, -1) + '1'
    }
  }
};
</script>

<style scoped>
.overlay {
  z-index: 999999;
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
}
.overlay--evaporate {
  bottom: 100vh;
}
.overlay--evaporate * {
  display: none;
}
h1 {
  color: white;
  font-family: "Roboto", sans-serif;
}
button {
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 24px;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  background-color: transparent;
}
button:hover {
  color: #000000;
  background-color: #ffffff;
}
iframe {
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
