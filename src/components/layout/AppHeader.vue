<template>
  <div class="header">
    <div class="header-logo">
      <h3>Comunity of Comunity</h3>
    </div>
    <div class="header-navbar">
      <b-nav>
        <b-nav-item @click="() => goBoard(1)">공지사항</b-nav-item>
        <b-nav-item @click="() => goBoard(2)">자유 게시판</b-nav-item>
        <b-nav-item @click="() => goBoard(3)">갤러리</b-nav-item>
        <b-nav-item @click="() => goBoard(4)">문의 게시판</b-nav-item>
      </b-nav>
      <div class="header-account">
        <template v-if="authStore.isLogin">
          <p>로그인 성공</p>
        </template>
        <template v-else>
          <b-button variant="outline-primary" @click="showLoginForm">로그인</b-button>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router';
import { useAuthStore } from '@/store/auth';

const router = useRouter();
const authStore = useAuthStore();

const showLoginForm = () => {
  router.push('/login')
}

const goBoard = ((n: number)=>{
  if(n==1){ router.push('/board/notice');}
  if(n==2){ router.push('/board/free');}
  if(n==3){ router.push('/board/gallery');}
  if(n==4){ router.push('/board/qna');}
});


</script>
 

<style>
  .header{
    border-bottom: 1px solid #000;
    margin-bottom: 10px;
  }
  .header-navbar{
    display: flex;
    justify-content: space-between;
  }
  .header-logo{
    height: 50px;
    padding: 10px 10px;
  }

</style>