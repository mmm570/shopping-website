import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import Swal from 'sweetalert2'

export const useShopCartStore = defineStore('shopCart', () => {
  const products = useStorage('products', {})

  function addToShopCart(item, quantity = 1) {
    const product = {
      icon: item.icon,
      title: item.title,
      price: item.price,
      quantity: quantity,
    }

    const productIndex = Object.keys(products.value).findIndex((key) => {
      return key === product.id
    })

    if (productIndex !== -1) {
      products.value[item.id].quantity += quantity
    } else {
      products.value[item.id] = product
    }

    Swal.fire({
      icon: 'success',
      title: '已加入購物車',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  function resetShopCart() {
    products.value = {}
  }

  return { products, addToShopCart, resetShopCart }
})
