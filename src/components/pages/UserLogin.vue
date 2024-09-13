<template>
  <div class="loginForm">
    <h3>로그인</h3>
    <b-form-input type="text" v-model="loginForm.loginId" placeholder="ID를 입력하세요" tabindex="0"/>
    <b-form-input type="password" v-model="loginForm.password" placeholder="비밀번호를 입력하세요"/>
    <b-button variant="primary" @click="login">로그인</b-button>
    <b-button variant="outline-primary" @click="goSignupForm">회원가입</b-button>
  </div>
</template>


// TODO  입력 값이 없을 경우 막기
<script setup lang="ts">
  import {reactive} from 'vue';
  import userService from '@/service/UserService';
  import {useRouter} from 'vue-router';
  import { useAuthStore } from '@/store/auth';

  const router = useRouter();
  const authStore = useAuthStore();

  const loginForm = reactive ({
    loginId:'',
    password:''
  });

  const login = () =>{
    userService.userLogin(loginForm).then( (response) => {
      if(response.token != null){
        localStorage.setItem('accessToken', response.token);

        const previousRoute = localStorage.getItem('previousRoute');

        if (previousRoute) {
          alert('test :: go to previous path');
          authStore.setLogin(response.token);
          router.push(previousRoute);
          localStorage.removeItem('previousRoute');
        } else {
          alert('not found previous path');
          router.push('/');
        }

      }else{
        alert(response.message);
      }
    });
  }

  const goSignupForm = () =>{
      router.push('/signup');
  };

</script>

<style>
  .loginForm{
    text-align: center;
    width: 400px;
    margin: 50px auto;
  }

  .loginForm h3 {
    margin-bottom: 30px;
  }
  
  .loginForm input, .loginForm button{
    width: 100%;
    margin: 3px 2px;
  }
  
</style>