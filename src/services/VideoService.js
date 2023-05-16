import { reactive } from 'vue'

const VideoService = reactive({
  src: 'portfolio.mp4',
  loaded: false,
  preload() {
    // const video = new Video()
    // video.onload = () => (this.loaded = true)
    // video.src = this.src
  },
})

export default VideoService
