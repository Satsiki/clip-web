import {
  createRouter,
  createWebHashHistory, //hash模式
  createWebHistory, //history模式
} from 'vue-router'
import Layout from 'layouts/index.vue'
import NotFound from "layouts/404.vue";

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('views/Home.vue'),
        name: 'Home',
      },
    ],
  },
  { path: '/:path(.*)', component: NotFound },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
