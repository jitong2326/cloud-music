import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BasicLayout from '@/layout/BasicLayout/BasicLayout.vue'
import { createRouterGuards } from './router-guards';
import { App } from 'vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/found',
    component: BasicLayout,
    children: [
      {
        path: 'found',
        name: 'Found',
        component: () => import('@/views/Found/Found.vue')
      },
      {
        path: 'music',
        name: 'Music',
        component: () => import('@/views/Music/Music.vue')
      },
      {
        path: 'focus',
        name: 'Focus',
        component: () => import('@/views/Focus/Focus.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export function setupRouter(app: App) {
  app.use(router);
  // 创建路由守卫
  createRouterGuards(router);
}

export default router;
