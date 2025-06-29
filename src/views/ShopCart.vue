<template>
  <div>
    <div class="w-fit flex flex-col gap-10">
      <template v-for="item in shopCart.products" :key="item.id">
        <div class="flex rounded-2xl shadow-sm">
          <div>
            <router-link :to="`/productItem/${item.id}`" class="black size-50">
              <img
                :src="`/src/assets/products/${item.icon}.jpg`"
                alt=""
                class="object-cover rounded-l-xl size-50"
            /></router-link>
          </div>
          <div class="flex flex-col justify-between p-5 my-[0.25px] rounded-r-2xl">
            <router-link :to="`/productItem/${item.id}`" class="font-bold">{{
              item.title
            }}</router-link>
            <div class="truncate w-[20rem] text-zinc-500">{{ item.description }}</div>
            <div class="flex gap-10 items-center justify-end">
              <div>${{ item.price }}</div>
              <div class="flex gap-3 items-center">
                <input
                  type="number"
                  v-model="item.count"
                  class="input border border-zinc-200 px-3 w-20 focus:outline-0"
                />個
              </div>
            </div>
          </div>
        </div>
      </template>
      <div class="flex w-full justify-end">
        <button class="btn bg-[#704f39] text-white">下單</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useShopCartStore } from '@/stores/shopCart'

const shopCart = useShopCartStore()
</script>
