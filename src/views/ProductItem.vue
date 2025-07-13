<template>
  <div class="w-[60%] flex flex-col items-center justify-center gap-20 py-10">
    <div class="w-full flex flex-col gap-10 mt-10">
      <div class="breadcrumbs text-sm">
        <ul>
          <li>
            <router-link to="/products" class="text-[#704f39] underline">所有產品</router-link>
          </li>
          <li>{{ productItem.title }}</li>
        </ul>
      </div>
      <div class="flex justify-between w-full">
        <img
          :src="`/src/assets/products/${productItem.icon}.jpg`"
          alt=""
          class="object-cover w-96 h-96"
        />
        <div class="flex flex-col justify-between w-[55%]">
          <div class="flex flex-col gap-5">
            <div class="text-2xl font-bold">{{ productItem.title }}</div>
            <div class="flex">
              <template v-for="item in [...Array(5).keys()]" :key="item">
                <div
                  class="h-8 mask mask-star-2"
                  :class="`${productItem.score >= item + 1 ? 'bg-[#704f39]' : 'bg-gray-300 '} ${productItem.score - item - 1 === 0.5 ? 'mask-half-1 w-4' : 'w-8'}`"
                ></div>
                <div
                  v-if="productItem.score - item - 1 === 0.5"
                  class="h-8 w-4 mask mask-star-2 bg-gray-300 mask-half-2"
                ></div>
              </template>
            </div>
            <div class="text-zinc-400">{{ productItem.description }}</div>
            <div>$ {{ productItem.price.toLocaleString() }}</div>
            <div class="text-[#704f39] text-sm">#{{ productItem.promotion }}</div>
          </div>
          <div class="w-full flex justify-end gap-10">
            <div class="flex gap-3 items-center">
              <input
                @keydown="onKeydown"
                @input="onInput"
                type="number"
                v-model.number="quantity"
                class="input border border-zinc-200 px-3 w-20 focus:outline-0"
              />個
            </div>
            <div
              class="btn bg-[#704f39] text-white w-fit px-5"
              @click="shopCart.addToShopCart(productItem, quantity)"
            >
              加入購物車
            </div>
          </div>
        </div>
      </div>
    </div>
    <otherProducts :products="products" :productId="props.id" />
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue'
import { useShopCartStore } from '@/stores/shopCart'
import otherProducts from '@/compontents/otherProducts.vue'

// data
const quantity = ref(1)
const shopCart = useShopCartStore()
const props = defineProps(['id'])
const productItem = ref({
  icon: null,
  id: null,
  title: null,
  description: null,
  price: 0,
  promotion: null,
  score: 0,
})
const products = ref([])

// watch
watch(
  () => props.id,
  () => {
    setProductItem()
  },
  { deep: true },
)

// methods
function onKeydown(event) {
  // 限制輸入
  const invalid = ['e', 'E', '+', '-', '.']

  if (invalid.includes(event.key)) {
    event.preventDefault()
  }
}

function onInput(event) {
  let val = event.target.value

  if (val === '' || val === '0') {
    val = 1
  }

  quantity.value = val
}

function setProductItem() {
  quantity.value = 1

  productItem.value = products.value.find((item) => {
    return item.id === props.id
  })
}

async function getProducts() {
  const res = await fetch('/products.json')
  const data = await res.json()

  products.value = await data.products
  setProductItem()
}

// lifecycle
onMounted(() => {
  getProducts()
})
</script>
