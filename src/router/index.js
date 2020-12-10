import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '@/views/About'
import Error from '@/views/Error'
import Login from '@/views/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About
    
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '*',
    name: 'Error',
    component: Error,
  },
  {
    path: '/administrador',
    name: 'administrador',
    component: () => import('../views/administrador/home.vue'),
    children: [
      {
        path: '/',
        name: 'dashboard',
        component: () => import('../views/administrador/dashboard.vue')
      },
      {  path: 'datos',
        name: 'datos',
        component: () => import('../views/administrador/datos.vue')
      },
      {
        path: 'mapas',
        name: 'mapas',
        component: () => import('../views/administrador/mapas.vue')
      },
      {
        path: 'estadisticas',
        name: 'estadisticas',
        component: () => import('../views/administrador/estadisticas.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
}) 



export default router
