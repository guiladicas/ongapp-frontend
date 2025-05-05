
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Painel from '../views/Painel.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/painel', component: Painel }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
