import {
  createRouter,
  createWebHashHistory, //hash模式
  createWebHistory, //history模式
} from 'vue-router'
import Layout from 'layouts/index.vue'

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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // routes: [{ path: '/', component: () => import('views/Home.vue') }],
})
export default router
