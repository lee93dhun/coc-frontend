import {createRouter, createWebHistory} from 'vue-router'
import MainPage from '@/components/pages/MainPage.vue'
import UserLogin from '@/components/modules/UserLogin.vue';

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/login',
    name: 'UserLogin',
    component: UserLogin
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;