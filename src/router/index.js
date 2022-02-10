import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',    
    component: () => import( '../views/Contacto.vue')
  },
  {
    path: '/pedir',
    name: 'Pedir',    
    component: () => import( '../views/Pedir.vue')
  },
  {
    path: '/estado',
    name: 'Estado',    
    component: () => import( '../views/Estado.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
