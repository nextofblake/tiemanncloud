import { createApp } from 'vue'
import Main from './Main.vue'
import Vue3TouchEvents from "vue3-touch-events";

const app = createApp(Main)
app.use(Vue3TouchEvents)
app.mount('#app')