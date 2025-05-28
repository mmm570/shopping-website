<template>
  <div>{{ shopCart.products }}</div>
</template>

<script setup>
import { useShopCartStore } from '@/stores/shopCart'

const shopCart = useShopCartStore()
</script>
