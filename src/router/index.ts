import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BusLines_Tab from '@/components/BusLines_Tab.vue';

const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'bus-lines-tab',
      component: BusLines_Tab
    },
    {
      path: '/Stops',
      name: 'stops-tab',
      component: () => import('@/components/Stops_Tab.vue')
    },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
