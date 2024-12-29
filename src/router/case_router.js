import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import CaseStudyView from '../views/CaseStudyView.vue'

console.log('WebHistory:',import.meta.env.BASE_URL)
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:caseStudyName',
      name: 'caseStudy',
      props: true,
      component: CaseStudyView
    },
  ]
})

export default router
