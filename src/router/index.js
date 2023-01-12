import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/viewType/index.vue'

const routes = [
  {
    path: '/',
    redirect:'/viewType/index',
  },
  {
    path: '/viewType/index',
    name: 'home',
    component: HomeView
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
