import { fileURLToPath, URL } from 'node:url'
import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig(({mode, command})=> {
  const env = loadEnv(mode,process.cwd())
  const {VITE_APP_BASE_PATH} = env
  return {
    base:VITE_APP_BASE_PATH,
    plugins: [
      vue(),
      vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }

})
