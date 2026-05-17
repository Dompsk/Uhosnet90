import { createRouter, createWebHistory } from "vue-router";
import Home from "@/view/home/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/view/about/About.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/view/news/News.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/view/contact/Contact.vue')
  },
  {
    path: '/uhosnet_group',
    name: 'uhosnet_group',
    component: () => import('@/view/uhosnet_group/UhosnetGroup.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/view/regis_process/Regis_process.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
});

export default router;
