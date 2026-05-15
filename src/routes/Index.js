import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/view/home/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/view/about/about.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/view/contact/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
