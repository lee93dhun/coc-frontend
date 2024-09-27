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

const signup = async(signupForm: SignupForm) => {
  const response = await axios.post('http://localhost:8081/api/user/signup',signupForm);
  return response.data;
}

export default{
  userLogin,
  isAvailableId,
  signup
}


