<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-full h-full flex justify-center items-center">
    <form @submit.prevent="handleLogin">
      <div class="bg-[#f4ede3] w-96 h-fit flex flex-col gap-10 items-center rounded-xl py-10">
        <div class="text-2xl font-bold text-[#704f39]">登入</div>
        <div class="flex flex-col gap-10">
          <input v-model="user.account" type="text" placeholder="帳號" class="input" />
          <input v-model="user.password" type="password" placeholder="密碼" class="input" />
        </div>
        <button class="btn bg-[#704f39] text-white border-0" type="submit" @click="login()">
          登入
        </button>
        <div class="text-[#704f39] text-sm">
          尚未註冊？<router-link
            :to="{ name: 'register' }"
            class="underline font-semibold hover:text-[#a57e65]"
            >立即註冊</router-link
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import router from '@/router'
import { useUserStore } from '@/stores/user'
import { ref, inject } from 'vue'

// data
const user = ref({
  account: null,
  password: null,
})
const userStore = useUserStore()
const hintAlert = inject('hintAlert')

// methods\
function checkIsEmpty(value) {
  return value === '' || value === null
}
function login() {
  const isRequired = Object.values(user.value).some((value) => !checkIsEmpty(value))
  if (!isRequired) {
    hintAlert.warning('帳號、密碼皆為必填')
    return
  }
  userStore.login()
  router.push('/')
  hintAlert.success('成功登入')
}
</script>
