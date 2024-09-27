<template>
  <div class="loginForm">
    <v-sheet class="mx-auto" width="400">
      <h3 class="login-title">로그인</h3>
      <v-form fast-fail @submit.prevent>
        <v-text-field 
          v-model="loginData.loginId"
          label="아이디"
          :error-messages="emptyValue.loginIdRules"
          @focus="clearError('loginIdRules')"
        ></v-text-field>
        <v-text-field
          v-model="loginData.password"
          label="비밀번호"
          type="password"
          :error-messages="emptyValue.passwordRules"
          @focus="clearError('passwordRules')"
        ></v-text-field>
        <v-btn class="mt-2" type="submit" block @click="login">로그인</v-btn>
        <v-btn class="mt-2" type="button" block @click="goSignupForm">회원가입</v-btn>
      </v-form>
    </v-sheet>
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

  const loginData = reactive ({
    loginId:'',
    password:''
  });

  const emptyValue = reactive({
    loginIdRules:'',
    passwordRules:''
  });


  const login = () =>{
    emptyValue.loginIdRules ='';
    emptyValue.passwordRules = '';
    if(!loginData.loginId){
      emptyValue.loginIdRules = '아이디를 입력해주세요.';
    }
    if(!loginData.password){
      emptyValue.passwordRules = '비밀번호를 입력해주세요.';
    }
    if(!emptyValue.loginIdRules && !emptyValue.passwordRules){
      userService.userLogin(loginData).then( (token) => {
        if(token != null){
          localStorage.setItem('accessToken', token.data);
          const previousRoute: string = localStorage.getItem('previousRoute') ?? "/";
          authStore.setLogin(token.data);
          router.push(previousRoute);
          localStorage.removeItem('previousRoute');
        }
      }).catch((error)=>{
        // TODO alert 창 -> errorMassage 알림 text로 변경
        const msg = error.response.data.message;
        alert(msg);
      });
    }
  };

  const clearError = (field: 'loginIdRules' | 'passwordRules') => {
  emptyValue[field] = '';
};

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

  .login-title {
    margin-bottom: 30px;
  }
</style>