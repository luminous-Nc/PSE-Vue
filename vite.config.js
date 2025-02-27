import { fileURLToPath, URL } from 'node:url'
import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { resolve } from 'path';


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
    build:{
      rollupOptions: {
        input: {
          pse: resolve(__dirname, 'index.html'), // index.html 对应 /pse/
          caseStudy: resolve(__dirname, 'case.html'), // case.html 对应 /case-study/
          plcInterfacing: resolve(__dirname,'plcInterfacing.html') // plcInterfacing.html 对应 /plc-interfacing/
        },
      }
    },
    server: {
      //Map /pse and  /case-study into different entrance
      proxy: {
        '/pse2': {
          target: 'http://localhost:5173', // Vite Default Port
          rewrite: (path) => '/index.html'
        },
        '/case-study': {
          target: 'http://localhost:5173',
          rewrite: (path) => '/case.html'
        },
        '/plc-interfacing': {
          target: 'http://localhost:5173',
          rewrite: (path) => '/plcInterfacing.html'
        },
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }

})
