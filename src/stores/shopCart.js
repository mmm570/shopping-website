import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useShopCartStore = defineStore('shopCart', () => {
  const products = useStorage('products', [])

  function addToShopCart(item) {
    products.value.push(item)
  }

  return { products, addToShopCart }
})
