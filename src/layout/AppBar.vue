<template>
  <div class="bg-white/50 w-full flex justify-between px-15 py-2 top-0 left-0 z-50">
    <div></div>
    <img src="../assets/logo.png" class="w-20" />
    <div class="flex gap-5">
      <ShoppingCartIcon class="text-[#704F39] size-7" @click="toShopCartPage" />
      <!-- <div v-else> -->
      <ArrowLeftEndOnRectangleIcon v-if="isLogin" class="text-[#704F39] size-7" @click="logout" />
      <!-- </div> -->
    </div>
  </div>
</template>
<script setup>
import router from '@/router'
import { ShoppingCartIcon, ArrowLeftEndOnRectangleIcon } from '@heroicons/vue/24/solid'
import { watch, ref } from 'vue'
import { useUserStore } from '@/stores/user'

const isLogin = ref(false)
const userStore = useUserStore()

watch(
  () => userStore.isLogin,
  () => {
    isLogin.value = userStore.isLogin
  },
  { deep: true },
)

function logout() {
  userStore.logout()
  document.cookie = 'username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC'
  router.push('/')
}

function toShopCartPage() {
  router.push('/shopCart')
}
</script>
