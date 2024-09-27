import {createRouter, createWebHistory} from 'vue-router'
import MainPage from '@/components/pages/MainPage.vue'
import UserLogin from '@/components/pages/UserLogin.vue';
import NoticeBoard from '@/components/pages/notice/NoticeBoard.vue';
import FreeBoard from '@/components/pages/free/FreeBoard.vue';
import GalleryBoard from '@/components/pages/gallery/GalleryBoard.vue';
import QnaBoard from '@/components/pages/qna/QnaBoard.vue';
import UserSignup from '@/components/pages/UserSignup.vue';

const routes = [
  { path: '/', name: 'MainPage', component: MainPage },
  { path: '/login', name: 'UserLogin', component: UserLogin },
  { path: '/signup', name: 'UserSignup', component: UserSignup},
  { path: '/board/notice', name: 'NoticeBoard', component: NoticeBoard },
  { path: '/board/free', name: 'FreeBoard', component: FreeBoard },
  { path: '/board/gallery', name: 'GalleryBoard', component: GalleryBoard },
  { path: '/board/qna', name: 'QnaBoard', component: QnaBoard }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && ( from.path !== '/login' && from.path !== '/signup' ) ) {
    console.log('from path = ',from.fullPath);
    // 로그인 페이지로 이동하려고 할 때, 로그인 페이지가 아닌 경로에서 왔다면 'from.fullPath'를 저장
    localStorage.setItem('previousRoute', from.fullPath);
  }
  next();
});

export default router;