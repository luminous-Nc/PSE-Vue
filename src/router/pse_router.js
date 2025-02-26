import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import LearningView from '../views/LearningView.vue'
import TopicView from '../views/TopicView.vue'

console.log(import.meta.env.BASE_URL)
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'learning',
      component: LearningView
    },
    {
      path: '/topic',
      name: 'topic',
      component: TopicView
    },
    {
      path: '/learningStyle',
      name: 'learningStyle',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LearningStyleView.vue')
    }
  ]
})

export default router
