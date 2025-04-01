import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: Layout,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue'),
        meta: {
          hidden: true
        },
      }
    ],
    meta: {
      hidden: true
    },
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true
    },
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@/views/error-page/404.vue'),
    meta: {
      hidden: true
    },
  },
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: [
      {
        path: '',
        name: 'bookstore',
        component: () => import('@/views/bookstore/index.vue'),
        meta: {
          title: '图书主页'
        },
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/bookstore/index.vue'),
        meta: {
          title: '我的主页'
        },
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // {
  //   path: '/permission',
  //   component: () => import('@/views/index.vue'),
  //   // redirect: '/permission',
  //   // alwaysShow: true, // will always show the root menu
  //   name: 'Permission',
  //   meta: {
  //     title: '权限页面',
  //     roles: ['admin'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: '/read',
  //       name: 'read',
  //       component: () => import('@/views/ReadView.vue'),
  //       meta: {
  //         title: 'Page Permission',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

export default router
