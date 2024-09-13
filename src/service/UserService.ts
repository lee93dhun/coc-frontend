import axios from "axios";

interface LoginForm{
  loginId: string;
  password: string;
}

export default{

  userLogin: async(loginForm: LoginForm) =>{
    console.log('user Login service 실행');
    try {
      const response = await axios.post('http://localhost:8081/api/user/login', loginForm);
      return response.data;
    } catch (error) {
      console.error('로그인 요청 중 오류 발생:', error);
      throw error; 
   }
  },

  isAvailableId: async(loginId: string) =>{
    try{
      const response = await axios.get('http://localhost:8081/api/auth/available-loginid',{
        params:{loginId:loginId}
      });
      return response.data;
    }catch (error){
      console.log('Id 중복검사 중 오류 발생');
      throw error;
    }
  }

}

