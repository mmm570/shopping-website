<template>
  {{ shopCart.products[0] }}
  <div class="flex flex-col gap-5 px-10 py-10">
    <template v-for="item in shopCart.products" :key="item.id">
      <div class="bg-red-100">1</div>
    </template>
  </div>
</template>

<script setup>
import { useShopCartStore } from '@/stores/shopCart'

const shopCart = useShopCartStore()
</script>
