import { createApp } from 'vue'
import Core from './Core.vue'
import ProfileService from './services/ProfileService'
import VideoService from './services/VideoService'
import FadeService from './services/FadeService'

const app = createApp(Core)

app.provide('fadeService', FadeService)
app.provide('profileService', ProfileService)
app.provide('videoService', VideoService)

app.mount('#app')
