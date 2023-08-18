import { createRouter, createWebHistory } from 'vue-router'
import layout from '../layout/index.vue'

declare module 'vue-router' {
  interface _RouteRecordBase {
    hidden?: boolean | string | number
    target?: string
  }
}

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
          component: () => import('@/views/Login/index.vue'),
        },
      ],
    },
    {
      path: '/Home',
      name: '首页',
      component: layout,
      meta: { title: 'person', icon: 'ChatLineRound',  roles: roles },
      children: [
        {
        path: '/about',
        name: '首页',
        component: () => import('@/views/Home/index.vue'),
        meta: { title: 'person', icon: 'ChatLineRound',  roles: roles },
      },
      ],
    },
    {
      path: '/table',
      name: '表格',
      component: layout,
      meta: { title: 'person', icon: 'ChatLineRound',  roles: roles },
      children: [{
        path: '/uiaad',
        name: '表格',
        component: () => import('@/views/Table/index.vue'),
        meta: { title: 'person', icon: 'ChatLineRound', affix: true, roles: roles },
      },
      {
        path: '/personInfoCards',
        name: 'personInfoCards',
        meta: { title: 'person', icon: 'ChatLineRound',  roles: roles },
        children: [
          {
            path: '/personInfoCards',
            name: 'personInfoCards',
            component: () => import('@/views/Dome/index.vue'),
            meta: { title: 'person', icon: 'ChatLineRound',  roles: roles },
          }
        ]
      },
      ],
    },
    {
      path: '/Form',
      name: '表单',
      component: layout,
      meta: { title: 'person', icon: 'ChatLineRound',  roles: roles },
      children: [{
        path: '/form',
        name: '表单',
        component: () => import('@/views/Form/index.vue'),
        meta: { title: 'person', icon: 'ChatLineRound', affix: true, roles: roles },
      },
      ],
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('@/views/Error/index.vue'),
      hidden: true,
    },
  ]
})

export default router
