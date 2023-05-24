import { createApp } from 'vue'
import Core from './Core.vue'
import EventService from './services/EventService'
import FadeService from './services/FadeService'
import ProfileService from './services/ProfileService'

const app = createApp(Core)

app.provide('eventService', EventService)
app.provide('fadeService', FadeService)
app.provide('profileService', ProfileService)

app.mount('#app')
