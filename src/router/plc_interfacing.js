import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import PLCInterfacingView from "@/views/PLCInterfacingView.vue";

console.log('WebHistory:',import.meta.env.BASE_URL)
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:plcCaseName',
      name: 'plcInterfacing',
      props: true,
      component: PLCInterfacingView
    },
  ]
})

export default router
