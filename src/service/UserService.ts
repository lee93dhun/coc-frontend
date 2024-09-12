import axios from "axios";

interface LoginForm{
  loginId: string;
  password: string;
}

const userLogin = async(loginForm: LoginForm) =>{
  console.log('user Login service 실행');
  try {
    const response = await axios.post('http://localhost:8081/api/user/login', loginForm);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('로그인 요청 중 오류 발생:', error);
    throw error; 
  }
}

export default userLogin;

