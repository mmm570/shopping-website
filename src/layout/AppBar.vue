<template>
  <div class="w-full flex items-center justify-between px-10 py-3 bg-[#f2e1d7]">
    <div></div>
    <router-link :to="`/`"><img src="../assets/logo.png" class="h-5" /></router-link>
    <div class="flex gap-5">
      <div class="indicator">
        <span
          class="indicator-item badge badge-xs badge-secondary"
          v-if="shopCart.products.length !== 0"
        >
          <div>{{ shopCart.products.length }}</div>
        </span>
        <ShoppingCartIcon class="text-[#704F39] size-7" @click="toShopCartPage" />
      </div>

      <div class="dropdown dropdown-end" v-if="isLogin">
        <div tabindex="0" role="button">
          <UserIcon class="text-[#704F39] size-7" />
        </div>
        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-fit shadow-md">
          <li @click="logout">
            <div class="flex">
              <ArrowLeftEndOnRectangleIcon class="text-[#704F39] size-6 p-0" />
              <div>登出</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- <div class="z-40">
    <div class="relative w-full h-16 bg-[#704f39] overflow-hidden text-white">
      <svg
        class="absolute bottom-0 left-0 w-full h-12"
        viewBox="0 0 500 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C100,160 200,-80 340,40 C440,120 560,-140 680,20 L1000,160 L0,80 Z"
          fill="white"
        />
      </svg>
    </div>
  </div> -->
</template>
<script setup>
import router from '@/router'
import { ShoppingCartIcon, ArrowLeftEndOnRectangleIcon, UserIcon } from '@heroicons/vue/24/solid'
import { watch, ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useShopCartStore } from '@/stores/shopCart'

const shopCart = useShopCartStore()
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
