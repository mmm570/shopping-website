<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="bg-[#f4ede3] w-96 h-fit flex flex-col gap-10 items-center rounded-xl py-10">
      <div class="text-2xl font-bold text-[#704f39]">登入</div>
      <div class="flex flex-col gap-10">
        <input type="text" placeholder="帳號" class="input" />
        <input type="password" placeholder="密碼" class="input" />
      </div>
      <div class="btn bg-[#704f39] text-white border-0" @click="login()">登入</div>
      <div class="text-[#704f39] text-sm">
        尚未註冊？<router-link
          :to="{ name: 'register' }"
          class="underline font-semibold hover:text-[#a57e65]"
          >立即註冊</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import router from '@/router'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

function login() {
  userStore.login()
  const fakeToken = 'Bearer token'
  document.cookie = `token=${fakeToken}`
  router.push('/')
}
</script>
