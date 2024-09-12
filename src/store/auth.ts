import { decodeToken } from '@/utils/jwt';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null,
    isLogin: false,
    loginId : null as string | null
  }),
  actions: {
    setLogin(token: string) {
      this.token = token;
      this.isLogin = true;

      const decodedToken = decodeToken(token);
      this.loginId = decodedToken.sub;
    },
    logout(){
      this.token = null;
      this.isLogin = false;
      this.loginId = null;
      localStorage.removeItem("accessToken");
    },
    restoreLogin(){
      const token = localStorage.getItem("accessToken");
      if(token){
        this.setLogin(token);
      }
    }
  },
});