<template>
  <div class="loginPart">
    <h3>로그인</h3>
    <table>
      <tbody>
        <tr>
          <td><b-form-input type="text" v-model="loginForm.loginId" placeholder="ID를 입력하세요" tabindex="0"/></td>
        </tr>
        <tr>
          <td><b-form-input type="password" v-model="loginForm.password" placeholder="비밀번호를 입력하세요"/></td>
        </tr>
        <tr>
          <td><b-button variant="outline-primary" @click="login">로그인</b-button></td>
        </tr>
        <tr>
          <td><b-button >회원가입</b-button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
  import {reactive} from 'vue';
  import userLogin from '@/service/UserService';
  import {useRouter} from 'vue-router';
  import { useAuthStore } from '@/store/auth';

  const router = useRouter();
  const authStore = useAuthStore();

  const loginForm = reactive ({
    loginId:'',
    password:''
  })

  const login = (token: string) =>{
    userLogin(loginForm).then( (response) => {
      if(response.token != null){
        localStorage.setItem('accessToken', response.token);

        const previousRoute = localStorage.getItem('previousRoute');

        if (previousRoute) {
          alert('test :: go to previous path');
          authStore.setLogin(token);
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



  

</script>

<style>
  .loginPart{
    text-align: center;
    width: 400px;
    margin: 50px auto;
  }
  .loginPart table{
    width: 100%;
  }
  .loginPart td{
    padding: 3px 1px;
  }
  
  .loginPart input, .loginPart button{
    width: 100%;
  }
  
</style>