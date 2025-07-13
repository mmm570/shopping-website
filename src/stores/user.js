import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useUserStore = defineStore('user', () => {
  const isLogin = useLocalStorage('isLogin', false)

  function login() {
    isLogin.value = true
  }

  function logout() {
    isLogin.value = false
  }

  return { isLogin, login, logout }
})
