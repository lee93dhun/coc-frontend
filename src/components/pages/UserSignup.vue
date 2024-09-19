<template>
  <div class="signup-form">
    <h3>회원가입</h3>
    <div id="duplicate-id">
      <b-form-input id="inputId" type="text" v-model="signupForm.loginId" placeholder="아이디"/>
      <b-button variant="dark" @click="isAvailableId">중복확인</b-button>
    </div>
    <b-form-input type="password" v-model="signupForm.password" placeholder="비밀번호"/>
    <b-form-input type="password" v-model="passwordCheck" placeholder="비밀번호 확인"/>
    <b-form-input type="text" v-model="signupForm.userName" placeholder="이름"/>
    <b-button variant="primary" @click="signup">가입하기</b-button>
  </div>
</template>

// TODO 로그인 상태에서 접근시 막기 ("로그아웃 이후 이용")
// TODO alert처리  변경
<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import userService from '@/service/UserService';
import { useRouter } from 'vue-router';

  const router = useRouter();
  
  const signupForm = reactive({
    loginId: "",
    password: "",
    userName: ""
  });
  const passwordCheck = ref('');
  let availableSignup:boolean ;

  const isAvailableId = async() => {
    console.log('아이디 중복검사 실행');
    let response = null;
    try{
      response = await userService.isAvailableId(signupForm.loginId)
      if(response === 'DUPLICATE'){
        alert('중복된 아이디입니다.');
      }
      if(response === 'AVAILABLE'){
        alert('사용가능한 아이디입니다.');
        availableSignup = true;
        console.log(availableSignup);
      }
      if(response === 'UNAVAILABLE'){
        alert('사용불가능한 아이디입니다.');
      }
      return response;
    }catch(error:any){
      console.log('error = ', error.response);
      alert(error.response.data);
    }
  }

  const signup = async() =>{
    
    console.log('회원가입 실행');
    if(!availableSignup){
      alert('아이디 중복검사를 실행해주세요.');
      return;
    }
    if(signupForm.password !== passwordCheck.value){
      alert('비밀번호를 확인해주세요.');
      return;
    }
    if (!signupForm.userName || signupForm.userName.trim() === '') {
      alert('이름을 입력해주세요.');
      return;
    }
    userService.signup(signupForm, availableSignup).then(()=>{
      alert('회원가입에 성공하였습니다. 로그인해주세요.');
      router.push('/login');
    });
  };
</script>


<style>

  .signup-form{
    text-align: center;
    width: 400px;
    margin: 50px auto;
  }

  .signup-form h3 {
    margin-bottom: 30px;
  }
  
  .signup-form input, .signup-form button{
    width: 100%;
    margin: 3px 2px;
  }
  #duplicate-id{
    display: flex;
  }
  #duplicate-id input{
    width: 77%;  
  }
  #duplicate-id button{
    width: 23%;  
  }

 
</style>