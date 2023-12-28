import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BusLinesView from '@/components/BusLinesView.vue';

const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'bus-lines-view',
      component: BusLinesView
    },
    {
      path: '/Stops',
      name: 'stops-view',
      component: () => import('@/components/StopsView.vue')
    },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
