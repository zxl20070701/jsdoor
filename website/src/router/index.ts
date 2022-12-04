import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [{
        path: '/',
        name: 'guide',
        component: () => import('../views/guide.vue')
      }, {
        path: '/server',
        name: 'server',
        component: () => import('../views/server.vue')
      }, {
        path: '/value',
        name: 'value',
        component: () => import('../views/value.vue')
      }, {
        path: '/resizeElement',
        name: 'resizeElement',
        component: () => import('../views/resizeElement.vue')
      }, {
        path: '/treeLayout',
        name: 'treeLayout',
        component: () => import('../views/treeLayout.vue')
      }, {
        path: '/Matrix4',
        name: 'Matrix4',
        component: () => import('../views/Matrix4.vue')
      }, {
        path: '/interpolation',
        name: 'interpolation',
        component: () => import('../views/interpolation.vue')
      }]
    }
  ]
})

export default router
