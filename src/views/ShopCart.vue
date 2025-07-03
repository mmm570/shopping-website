<template>
  <div class="py-10 w-[60%]">
    <div class="w-ful shadow-sm p-10 rounded-xl flex flex-col gap-5 l">
      <div class="breadcrumbs text-sm">
        <ul>
          <li>
            <router-link to="/products" class="text-[#704f39] underline">所有產品</router-link>
          </li>
          <li>購務車</li>
        </ul>
      </div>
      <div class="w-full border-b border-[#969C92] pb-2">
        <div class="text-[#969C92] font-bold text-xl">你的訂單</div>
      </div>
      <div v-if="shopCart.products.length === 0" class="px-3 text-sm">購物車為空...</div>
      <div v-else class="w-full flex flex-col items-center gap-10">
        <template v-for="(item, index) in shopCart.products" :key="item.id">
          <div class="w-[80%] flex rounded-2xl shadow-sm">
            <div>
              <router-link :to="`/productItem/${item.id}`">
                <img
                  :src="`/src/assets/products/${item.icon}.jpg`"
                  alt=""
                  class="object-cover rounded-l-xl size-[15rem]"
              /></router-link>
            </div>
            <div class="flex flex-col justify-between p-5 my-[0.25px] rounded-r-2xl grow">
              <router-link :to="`/productItem/${item.id}`" class="font-bold">{{
                item.title
              }}</router-link>
              <div class="truncate text-zinc-500">{{ item.description }}</div>
              <div class="flex gap-10 items-center justify-end">
                <div>${{ item.price }}</div>
                <div class="flex gap-3 items-center">
                  <input
                    @keydown="onKeydown"
                    @input="onInput(event, index)"
                    type="number"
                    v-model="item.count"
                    class="input border border-zinc-200 px-3 w-20 focus:outline-0"
                  />個
                </div>
              </div>
            </div>
          </div>
        </template>
        <div class="flex w-full justify-end border-t border-[#969C92] pt-2">
          <div class="text-[#969C92] font-bold">總計 ${{ totalPrice }}</div>
        </div>
      </div>
      <div class="flex w-full justify-end">
        <button class="btn bg-[#704f39] text-white" @click="toCheckoutPage">下單</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useShopCartStore } from '@/stores/shopCart'
import { useUserStore } from '@/stores/user'
import router from '@/router'

const shopCart = useShopCartStore()
const userStore = useUserStore()
const isLogin = computed(() => userStore.isLogin)

// computed
const totalPrice = computed(() => {
  let price = 0
  shopCart.products.forEach((item) => {
    price += item.price * item.count
  })

  return price
})

function toCheckoutPage() {
  // if (!isLogin.value) {
  router.push('/Checkout')
  // }
}

function onKeydown(event) {
  // 限制輸入
  const invalid = ['e', 'E', '+', '-', '.']

  if (invalid.includes(event.key)) {
    event.preventDefault()
  }
}

function onInput(event, index) {
  let val = event.target.value

  if (val === '' || val === '0') {
    val = 1
  }

  shopCart.products[index] = val
}
</script>
