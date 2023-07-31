import { createRouter, createWebHistory } from 'vue-router'
import layout from '../layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: layout,
      children: [{
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutView.vue')
      },
      {
        path: '/personInfoCards',
        name: 'personInfoCards',
        component: () => import('@/views/AboutView.vue'),
      },
      ],
    },
  ]
})

export default router
