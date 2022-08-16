import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( '../views/register.vue')
  },
  {
    path: '/productPage',
    name: 'productPage',
    component: () => import( '../views/productPage.vue')
  },
  {
    path: '/card',
    name: 'card',
    component: () => import( '../views/card.vue')
  },
  {
    path: '/userAdmin',
    name: 'userAdmin',
    component: () => import( '../views/userAdmin.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import( '../views/user.vue')
  },
  {path: '/contact',
  name: 'contact',
  component: () => import( '../views/contact.vue')
  },
 
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
