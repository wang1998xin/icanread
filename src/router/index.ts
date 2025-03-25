import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import MainView from '../views/MainView.vue';
import MainContent from '../components/MainContent.vue';
import OtherView from '../views/OtherView.vue';
import ImageEditorView from '../views/ImageEditorView.vue';

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: MainView,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('../views/Redirect.vue')
      }
    ],
    meta: {
      hidden: true
    },
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue'),
    meta: {
      hidden: true
    },
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@/views/error-page/404.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: MainView,
    children: [
      {
        path: '',
        name: 'mainContent',
        component: MainContent
      },
      {
        path: '/other',
        name: 'other',
        component: OtherView
      },
      {
        path: '/imageEditorView',
        name: 'imageEditorView',
        component: ImageEditorView
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/permission',
    // component: MainView,
    component: () => import('@/views/ReadView.vue'),
    // redirect: '/permission',
    // alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Permission',
      roles: ['admin'] // you can set roles in root nav
    },
    // children: [
    //   {
    //     path: '/read',
    //     name: 'read',
    //     component: () => import('@/views/ReadView.vue'),
    //     meta: {
    //       title: 'Page Permission',
    //       roles: ['admin'] // or you can only set roles in sub nav
    //     }
    //   }
    // ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

export default router
