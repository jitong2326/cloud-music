import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BasicLayout from '@/layout/BasicLayout/BasicLayout.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'home',
    component: BasicLayout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/Home/Home.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
