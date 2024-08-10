import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import MainContent from '../components/MainContent.vue';
import OtherView from '../views/OtherView.vue';
import ImageEditorView from '../views/ImageEditorView.vue';
import loginView from '../views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
})

export default router
