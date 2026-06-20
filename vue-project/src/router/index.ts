import HomeView from '@/views/HomeView.vue'
import MovieView from '@/views/MovieView.vue'
import ReceiptView from '@/views/ReceiptView.vue'
import ReservationView from '@/views/ReservationView.vue'
import SeansView from '@/views/SeansView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
     {
      path: '/movies/:slug',
      name: 'movie',
      component: MovieView,
    },
     {
      path: '/seans',
      name: 'seans',
      component: SeansView,
    },
     {
      path: '/reservation/:slug',
      name: 'reservation',
      component: ReservationView,
    },
     {
      path: '/receipt',
      name: 'receipt',
      component: ReceiptView,
    },
  ],
})

export default router
