import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null,
    isLogin: false,
  }),
  actions: {
    setLogin(token: string) {
      this.token = token;
      this.isLogin = true;
    },
    logout(){
      this.token = null;
      this.isLogin = false;
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