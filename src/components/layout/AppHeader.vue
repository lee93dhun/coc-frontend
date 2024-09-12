<template>
  <div class="header">
    <div class="header-logo">
      <h3>Comunity of Comunity</h3>
    </div>
    <div class="header-navbar">
      <b-nav>
        <b-nav-item >공지사항</b-nav-item>
        <b-nav-item>자유 게시판</b-nav-item>
        <b-nav-item>갤러리</b-nav-item>
        <b-nav-item>문의 게시판</b-nav-item>
      </b-nav>
      <div class="header-account">
        <b-button variant="outline-primary" @click="getLoginForm">로그인</b-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter();

const getLoginForm = () => {
  router.push('/login')
}
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