<template>
  <!-- <Viewer>
    <Tile>
      <div class="tile__head">
        Blake Tiemann
      </div>
      <div class="tile__body">
        Hello
      </div>
    </Tile>

    <Tile>
      <div class="tile__head">
        NExt slide
      </div>
      <div class="tile__body">
        Hello
      </div>
    </Tile>
  </Viewer> -->
  <div class="info">
    <h1>Blake Tiemann</h1>
  </div>
  <img
    src="./assets/blake_profile_juijitsu.png"
    class="profile"
  >
</template>

<script>
// import Tile from './components/Tile';
// import Viewer from './components/Viewer';

export default {
  name: 'App',
  components: {
    // Tile,
    // Viewer,
  },
  data() {
    return {
      showCover: true,
      tiles: [
        { key: 1 },
        { key: 2 },
      ]
    }
  },
  mounted() {
    //console.log(this.$el)
    document.addEventListener('swiped-up', function(e) {
      console.log(e.target); // the element that was swiped
    });
  },
  methods: {
    run() {
      console.log('hello world');
      // var audio = document.querySelector('#audio');
      // audio.play()

      var video = document.querySelector('#video');
      video.src = video.src.slice(0, -1) + '1';
    }
  }
}
</script>

<style>
body {
  margin: 0;
  height: 100vh;
  width: 100vw;
  /**
   * Color
   * - purple wave: okay
   * - witch midnight: okay
   * - firewatch: good
   */
  background-image: linear-gradient(0deg, #0f0c29, #302b63, #24243e);
  background-image: linear-gradient(0deg, #240b36, #c31432);
  background-image: linear-gradient(90deg, #cb2d3e, #ef473a);

  /**
   * Neutral
   * - white
   * - baige
   */
  background-image: linear-gradient(180deg, #ffffff, #abbaab);
  background-image: linear-gradient(0deg, #d6ae7b, #eacda3);
  background-image: linear-gradient(-170deg, #434343 0%, black 100%);

  /**
   * Pastels
   * - carribean: great
   * - rose sky: good
   * - blue sky: okay
   * - peach sky: great
   * - peach sky light: great
   */
  background-image: linear-gradient(135deg, #abe9cd 0%, #3eadcf 74%);
  background-image: linear-gradient(0deg, rgb(242, 112, 156), rgb(255, 148, 114));
  background-image: linear-gradient( 95.2deg, rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64% );
  background-image: linear-gradient(160deg, #ff9966, #ff5e62);
  background-image: linear-gradient(0deg, #ff735f, #feb47b);

}
h1 {
  margin: 0
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
img.profile {
  position: absolute;
  bottom: 0;
  width: 140vw;
  left: -40vw;
}
img.wireframe {
  position: absolute;
  bottom: -130px;
  width: 140vw;
  left: -40vw;
}
</style>
