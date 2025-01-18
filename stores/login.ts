import { defineStore } from "pinia";

export const loginStore = defineStore("login", {
  state: () => ({
    email: "",
    nama: "",
    isLogin: false,
  }),
  actions: {
    login(email: string, nama: string) {
      this.email = email;
      this.nama = nama;
      this.isLogin = true;
    },
    logout() {
      this.email = "";
      this.nama = "";
      this.isLogin = false;
    }
  },
  persist: {
    key: "login",
    storage: localStorage,
  }
});
