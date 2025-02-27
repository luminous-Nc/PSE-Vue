import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import piniaPersist from 'pinia-plugin-persist'
import App from './apps/PLC_Interfacing_App.vue'
import plcRouter from './router/plc_interfacing.js'


import './index.css'
import {useMemoryStore} from "@/stores/memory.js"; //import TailWind Css
const app = createApp(App)

const pinia = createPinia()
// pinia.use(piniaPersist)

app.use(pinia)
app.use(plcRouter)

const memoryStore = useMemoryStore()
memoryStore.task = "plc interfacing"

app.mount('#app')
