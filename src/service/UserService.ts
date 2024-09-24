import axios from "axios";

interface LoginForm{
  loginId: string;
  password: string;
}
interface SignupForm{
  loginId: string;
  password: string;
  userName: string;
}


const userLogin = async(loginForm: LoginForm) =>{
  console.log('user Login service 실행');
    const response = await axios.post('http://localhost:8081/api/user/login', loginForm);
    return response.data;
}

const isAvailableId = async(loginId: string) =>{
  const response = await axios.post('http://localhost:8081/api/auth/available-loginid', {"loginId":loginId});
  return response.data;
}

const signup = async(signupForm: SignupForm, availableSignup:boolean) => {
  console.log('서버로 데이터 전송', signupForm);
  console.log('아이디 중복검사 여부 : ', availableSignup);
  const requestData = {
    loginId: signupForm.loginId,
    password: signupForm.password,
    userName: signupForm.userName,
    availableSignup: availableSignup
  };
  console.log('전송할 데이터: ',requestData);
  try{
    const response = await axios.post('http://localhost:8081/api/user/signup',requestData);
    console.log('회원가입성공 : ',response.data);
    return response.data;
  }catch(error){
    console.log('회원가입 중 오류 발생');
    alert('잘못된 요청입니다. 다시 시도해주세요.');
  }
}

export default{
  userLogin,
  isAvailableId,
  signup
}


