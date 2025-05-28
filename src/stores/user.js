import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const isLogin = ref(false)

  function login() {
    isLogin.value = true
  }

  function logout() {
    isLogin.value = false
  }

  return { isLogin, login, logout }
})
