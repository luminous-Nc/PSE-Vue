import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './index.css' //import TailWind Css
import {useTopicsStore} from "@/stores/topic.js";
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
