import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Datenschutz from '../views/Datenschutz.vue'
import Status from '../views/Status.vue'
import Order from '../views/Order.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
    },
    {
      path: '/status',
      name: 'status',
      component: Status,
    },
    {
      path: '/datenschutz',
      name: 'datenschutz',
      component: Datenschutz,
    },
  ],
})

export default router
