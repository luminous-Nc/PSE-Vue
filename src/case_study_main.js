import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import piniaPersist from 'pinia-plugin-persist'
import App from './apps/Case_Study_App.vue'
import case_router from './router/case_router.js'

import './index.css' //import TailWind Css
const app = createApp(App)

const pinia = createPinia()
// pinia.use(piniaPersist)

app.use(pinia)
app.use(case_router)

app.mount('#app')
