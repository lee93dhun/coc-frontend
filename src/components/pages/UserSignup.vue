<template>
  <div class="signup-form">
    <v-sheet class="mx-auto" width="400">
      <h3 class="signup-title">회원가입</h3>
      <v-form fast-fail @submit.prevent>
        <div id="duplicate-id">
          <v-text-field 
            v-model="signupForm.loginId"
            label="아이디"
            :error="!!validCheck.validLoginId"  
            :error-messages="validCheck.validLoginId"
            style="white-space: pre-line; text-align: left; padding-bottom: 6px;"
          ></v-text-field>
          <v-btn @click="isAvailableId">중복검사</v-btn>
        </div>
        <v-text-field
          v-model="signupForm.password"
          label="비밀번호"
          type="password"
          :error="!!validCheck.validPassword"
          :error-messages="validCheck.validPassword"
          @blur="outPassword"
          style="white-space: pre-line; text-align: left; padding-bottom: 6px;"
        ></v-text-field>
        <v-text-field
          v-model="passwordCheck"
          label="비밀번호 확인"
          type="password"
          :error="!!validCheck.validPasswordCheck"
          :error-messages="validCheck.validPasswordCheck"
          @blur="outPasswordCheck"
          style="white-space: pre-line; text-align: left; padding-bottom: 6px;"
        ></v-text-field>
        <v-text-field
          v-model="signupForm.userName"
          label="이름"
          :error="!!validCheck.validUserName"
          :error-messages="validCheck.validUserName"
          @blur="outName"
          style="white-space: pre-line; text-align: left; padding-bottom: 6px;"
        ></v-text-field>
        <v-btn class="mt-1" type="submit" block @click="signup">가입하기</v-btn>
      </v-form>
    </v-sheet>
   
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
const validCheck = reactive({
  validLoginId: "",
  validPassword: "",
  validPasswordCheck: "",
  validUserName:""
});

const passwordCheck = ref('');

let availableSignup:boolean = false;

const isAvailableId = async() => {
  console.log('아이디 중복검사 실행');

  const idPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d-_]+$/;
  if(signupForm.loginId == ""){
    validCheck.validLoginId="아이디를 입력해주세요.";
  }else if((signupForm.loginId.length < 4 || signupForm.loginId.length > 11) ||!idPattern.test(signupForm.loginId)){
    validCheck.validLoginId="- 4 ~ 11자의 영문만 가능합니다.\n- 영문과 숫자의 조합입니다\n- 특수기호는 '-', '_'만 가능합니다.";
  }
  try{
    const data = await userService.isAvailableId(signupForm.loginId);
    validCheck.validLoginId = '';
    alert(data.message);
    availableSignup = true;
    // TODO alert -> success message로 변경
  }catch(error:any){
    const errMsg = error.response.data.message;
    console.log(errMsg);
  }
}

const outPassword=(()=>{
  const pwPattern = /^(?!.*([A-Za-z\d!@#$%^&*])\1{2})[A-Za-z\d!@#$%^&*]+$/;
  if(signupForm.password == ""){
    validCheck.validPassword="";
  }else if( (signupForm.password.length < 4 || signupForm.password.length > 11) || !pwPattern.test(signupForm.password) ){
    console.log('1');
    validCheck.validPassword="- 4 ~ 11자의 영문과 특수기호[ !,@,#,$,%,^,&,* ]만 가능합니다.\n- 반복되는 문자 3번 연속은 불가능합니다.";
  }else if(signupForm.loginId == signupForm.password){
    console.log('2');
    validCheck.validPassword="아이디와 동일한 비밀번호는 사용할 수 없습니다.";
  }else{
    validCheck.validPassword="";
  }
  outPasswordCheck();
});

let pwCheck = false;
const outPasswordCheck= (()=>{
  
  if(signupForm.password != passwordCheck.value && passwordCheck.value != ""){
    validCheck.validPasswordCheck = "비밀번호가 일치하지 않습니다.";
  }
  else{
    validCheck.validPasswordCheck = "";
    pwCheck = true;
  }
});

const outName=(()=>{
  const namePattern = /^[A-Za-z가-힣]+$/;
  if(signupForm.userName == ""){
    validCheck.validUserName="";
  }else if((signupForm.userName.length < 2 || signupForm.userName.length > 5) || !namePattern.test(signupForm.userName)){
    validCheck.validUserName = "2 ~ 5자의 한글과 영문만 가능합니다.";
  }
});


const signup = async() =>{
  console.log('회원가입 실행');
  console.log(availableSignup);
  if(!availableSignup){
    validCheck.validLoginId="아이디 중복검사를 실행해주세요.";
  }else if(signupForm.password == ""){
    validCheck.validPassword="비밀번호를 입력해주세요";
  }else if(signupForm.userName==""){
    validCheck.validUserName="이름을 입력해주세요.";
  }else if(pwCheck){
    userService.signup(signupForm).then((data)=>{
      console.log(data);
      alert('회원가입에 성공하였습니다. 로그인해주세요.');
      router.push('/login');
    }).catch((error)=>{
      console.log(error.response);
    });
  }
};

</script>


<style>

  .signup-form{
    text-align: center;
    width: 400px;
    margin: 50px auto;
  }
  .signup-title {
    margin-bottom: 30px;
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