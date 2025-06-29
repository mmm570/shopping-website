import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import Swal from 'sweetalert2'

export const useShopCartStore = defineStore('shopCart', () => {
  const products = useStorage('products', [])

  function addToShopCart(item, count = 1) {
    const product = {
      icon: item.icon,
      id: item.id,
      title: item.title,
      price: item.price,
      count: count,
    }

    const productIndex = products.value.findIndex((value) => {
      return value.id === product.id
    })

    if (productIndex !== -1) {
      products.value[productIndex].count += count
    } else {
      products.value.push(product)
    }

    Swal.fire({
      icon: 'success',
      title: '已加入購物車',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  function resetShopCart() {
    products.value = []
  }

  return { products, addToShopCart, resetShopCart }
})
