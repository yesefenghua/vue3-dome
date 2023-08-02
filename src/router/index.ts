import { createRouter, createWebHistory } from 'vue-router'
import layout from '../layout/index.vue'
const roles = [
  {
    value: 'A',
    key: 5,
  },
  {
    value: 'B',
    key: 6,
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      redirect: '/login',
      hidden: true,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/login/index.vue'),
        },
        // {
        //   path: '/register',
        //   name: 'register',
        //   component: () => import('@/views/login/components/registerCom.vue'),
        // },
      ],
    },
    {
      path: '/about',
      name: '首页',
      component: layout,
      meta: { title: 'person', icon: 'ChatLineRound',  roles: roles },
      children: [
        {
        path: '/about',
        name: '系统',
        component: () => import('@/views/AboutView.vue'),
        meta: { title: 'person', icon: 'ChatLineRound',  roles: roles },
      },
      {
        path: '/personInfoCards',
        name: 'personInfoCards',
        meta: { title: 'person', icon: 'ChatLineRound',  roles: roles },
        children: [
          {
            path: '/about11',
            name: 'about11',
            component: () => import('@/views/AboutView.vue'),
            meta: { title: 'person', icon: 'ChatLineRound',roles: roles },
          },
          {
            path: '/personInfoCards',
            name: 'personInfoCards',
            component: () => import('@/views/index.vue'),
            meta: { title: 'person', icon: 'ChatLineRound',  roles: roles },
          }
        ]
      },
      ],
    },
    {
      path: '/ui',
      name: 'ui',
      component: layout,
      meta: { title: 'person', icon: 'ChatLineRound',  roles: roles },
      children: [{
        path: '/uiaad',
        name: '系统1',
        component: () => import('@/views/AboutView.vue'),
        meta: { title: 'person', icon: 'ChatLineRound', affix: true, roles: roles },
      },
      ],
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('@/views/error/index.vue'),
      hidden: true,
    },
  ]
})

export default router
