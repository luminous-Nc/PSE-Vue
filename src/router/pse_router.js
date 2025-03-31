import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import LearningView from "../views/LearningView.vue";
import TopicView from "../views/TopicView.vue";
import DebugView from "../views/Debug.vue";

console.log(import.meta.env.VITE_APP_BASE_PATH_PSE);
const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_APP_BASE_PATH_PSE),
  routes: [
    {
      path: "/",
      name: "learning",
      component: LearningView,
    },
    {
      path: "/sequential",
      name: "sequential",
      component: LearningView,
    },
    {
      path: "/global",
      name: "global",
      component: LearningView,
    },
    {
      path: "/debug",
      name: "debug",
      component: DebugView,
    },
    {
      path: "/topic",
      name: "topic",
      component: TopicView,
    },
    {
      path: "/learningStyle",
      name: "learningStyle",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/LearningStyleView.vue"),
    },
  ],
});

export default router;
