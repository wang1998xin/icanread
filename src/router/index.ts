import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import MainContent from '../components/MainContent.vue';
import OtherView from '../views/OtherView.vue';
import ImageEditorView from '../views/ImageEditorView.vue';

export const constantRoutes = [
  {
    path: '/redirect',
    component: MainView,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('../views/Redirect.vue')
      }
    ],
    meta:{
      hidden: true
    },
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue'),
    meta:{
      hidden: true
    },
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
  },
  {
    path: '/read',
    name: 'read',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ReadView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

export default router
