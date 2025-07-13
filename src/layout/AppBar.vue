<template>
  <div class="w-full grid grid-cols-3 items-center px-10 py-3 bg-[#f2e1d7]">
    <div></div>
    <div class="flex justify-center">
      <router-link :to="`/`"><img src="../assets/logo.png" class="h-5" /></router-link>
    </div>
    <div class="flex gap-5 justify-end">
      <router-link :to="`/products`"><Squares2X2Icon class="text-[#704F39] size-5" /></router-link>
      <div class="dropdown dropdown-end z-2">
        <div tabindex="0" role="button">
          <UserIcon class="text-[#704F39] size-5" />
        </div>
        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-fit shadow-md">
          <template v-if="userStore.isLogin">
            <li>
              <router-link :to="`/orderHistory`" class="flex gap-3">
                <IdentificationIcon class="text-[#704F39] size-6 p-0" />
                <div class="text-nowrap">訂單資訊</div>
              </router-link>
            </li>
            <li @click="logout">
              <div class="flex gap-3">
                <ArrowLeftStartOnRectangleIcon class="text-[#704F39] size-6 p-0" />
                <div class="text-nowrap">登出</div>
              </div>
            </li></template
          ><template v-else>
            <li>
              <router-link :to="`/login`" class="flex gap-3">
                <ArrowLeftEndOnRectangleIcon class="text-[#704F39] size-6 p-0" />
                <div class="text-nowrap">登入</div>
              </router-link>
            </li>
          </template>
        </ul>
      </div>
      <template v-if="currectRouter !== 'shopCart'">
        <ShopCartDrawer />
      </template>
    </div>
  </div>
</template>

<script setup>
import ShopCartDrawer from '@/compontents/ShopCartDrawer.vue'
import router from '@/router'
import {
  ArrowLeftEndOnRectangleIcon,
  ArrowLeftStartOnRectangleIcon,
  UserIcon,
  Squares2X2Icon,
  IdentificationIcon,
} from '@heroicons/vue/24/solid'
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'

// data
const userStore = useUserStore()
const currectRouter = computed(() => router.currentRoute.value.name)

// methods
function logout() {
  userStore.logout()
  router.push('/')
}
</script>
