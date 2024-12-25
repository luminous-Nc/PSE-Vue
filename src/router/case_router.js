import { createRouter, createWebHistory } from 'vue-router'
import CaseStudyView from '../views/CaseStudyView.vue'

console.log('WebHistory:',import.meta.env.BASE_URL+'case-study')
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL+'case-study'),
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
