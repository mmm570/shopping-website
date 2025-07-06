<template>
  <div class="w-full flex items-center justify-between px-10 py-3 bg-[#f2e1d7]">
    <div></div>
    <router-link :to="`/`"><img src="../assets/logo.png" class="h-5" /></router-link>
    <div class="flex gap-5">
      <div class="indicator">
        <span
          class="indicator-item badge badge-xs badge-secondary"
          v-if="shopCart.products.length !== 0 && !isOpenDrawer"
        >
          <div>{{ shopCart.products.length }}</div>
        </span>
        <div class="drawer drawer-end">
          <input id="my-drawer" type="checkbox" class="drawer-toggle" v-model="isOpenDrawer" />
          <div class="drawer-content">
            <label for="my-drawer" class="drawer-button">
              <ShoppingCartIcon class="text-[#704F39] size-7" />
              <!-- @click="toShopCartPage" -->
            </label>
          </div>
          <div class="drawer-side">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <div class="relative h-full overflow-hidden flex flex-col">
              <ul class="bg-white text-base-content h-full overflow-y-scroll w-fit p-4">
                <template v-for="item in shopCart.products" :key="item.id">
                  <li class="rounded-xl hover:bg-zinc-200 active:bg-zinc-300">
                    <!-- <div class="flex"> -->
                    <router-link
                      :to="`/productItem/${item.id}`"
                      class="flex p-4 gap-2"
                      @click="isOpenDrawer = false"
                    >
                      <img
                        :src="`/src/assets/products/${item.icon}.jpg`"
                        alt=""
                        class="object-cover rounded-xl size-[10rem]"
                      />
                      <div class="flex flex-col justify-between py-3">
                        <div class="text-base font-medium">
                          {{ item.title }}
                        </div>
                        <div>
                          <input
                            class="input border border-zinc-200 px-3 w-20 focus:outline-0"
                            type="number"
                            v-model="item.count"
                          />
                        </div>
                        <div class="text-right">$ {{ item.price }}</div>
                      </div>
                    </router-link>
                  </li>
                </template>
              </ul>
              <div
                class="sticky bottom-0 left-0 w-full bg-white/80 shadow flex items-center justify-end p-2"
              >
                <button
                  class="btn bg-[#969C92] hover:bg-[#b2baad] text-white w-fit"
                  @click="toShopCartPage()"
                >
                  進入購物車
                </button>
              </div>
            </div>
          </div>
        </div>
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

<style scoped>
/* .menu {
  & :where(li) {
    & > :not(ul, .menu-title, details, .btn):active,
    & > :not(ul, .menu-title, details, .btn).menu-active,
    & > details > summary:active {
      background-color: transparent !important;
    }
  }
} */
</style>

<script setup>
import router from '@/router'
import { ShoppingCartIcon, ArrowLeftEndOnRectangleIcon, UserIcon } from '@heroicons/vue/24/solid'
import { watch, ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useShopCartStore } from '@/stores/shopCart'

const shopCart = useShopCartStore()
const isLogin = ref(false)
const userStore = useUserStore()
const isOpenDrawer = ref(false)

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
