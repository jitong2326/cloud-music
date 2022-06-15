import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BasicLayout from '@/layout/BasicLayout/BasicLayout.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'found',
    component: BasicLayout,
    children: [
      {
        path: 'found',
        name: 'found',
        component: () => import('@/views/Found/Found.vue')
      },
      {
        path: 'music',
        name: 'music',
        component: () => import('@/views/Music/Music.vue')
      },
      {
        path: 'focus',
        name: 'focus',
        component: () => import('@/views/Focus/Focus.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
