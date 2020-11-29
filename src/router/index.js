import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  routes
})

export default router
