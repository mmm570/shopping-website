<template>
  <div class="w-full flex items-center justify-between px-10 py-3 bg-[#f2e1d7]">
    <div></div>
    <router-link :to="`/`"><img src="../assets/logo.png" class="h-5" /></router-link>
    <div class="flex gap-5">
      <template v-if="currectRouter !== 'shopCart'">
        <ShopCartDrawer />
      </template>
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
</template>

<script setup>
import ShopCartDrawer from '@/compontents/ShopCartDrawer.vue'
import router from '@/router'
import { ArrowLeftEndOnRectangleIcon, UserIcon } from '@heroicons/vue/24/solid'
import { watch, ref, computed } from 'vue'
import { useUserStore } from '@/stores/user'
import { useShopCartStore } from '@/stores/shopCart'

// data
const shopCart = useShopCartStore()
const isLogin = ref(false)
const userStore = useUserStore()
const isOpenDrawer = ref(false)
const currectRouter = computed(() => router.currentRoute.value.name)
const shopCartProducts = computed(() => shopCart.products)

// watch
watch(
  () => userStore.isLogin,
  () => {
    isLogin.value = userStore.isLogin
  },
  { deep: true },
)

// methods
function logout() {
  userStore.logout()
  document.cookie = 'username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC'
  router.push('/')
}
</script>
