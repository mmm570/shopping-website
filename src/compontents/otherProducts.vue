<template>
  <div class="w-full border-b border-[#969C92]">
    <div class="text-[#969C92] font-bold px-10">其他相關產品</div>
  </div>
  <div class="carousel w-full m-10 py-5">
    <template v-for="(grop, index) in gropProducts" :key="index">
      <div :id="`slide${index}`" class="carousel-item w-full flex justify-center gap-10 relative">
        <template v-for="item in grop" :key="item.id">
          <div class="card w-60 bg-base-100 shadow-md" @click="tpPage(item.id)">
            <img
              :src="`/src/assets/products/${item.icon}.jpg`"
              alt=""
              class="object-cover w-60 h-60 rounded-t-lg"
            />
            <div class="card-body p-4">
              <h2 class="card-title text-sm">{{ item.title }}</h2>
              <p class="text-zinc-500 text-sm">$ {{ item.price.toLocaleString() }}</p>
            </div>
          </div></template
        >
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10"
        >
          <a
            :href="`#slide${(index - 1 + gropProducts.length) % gropProducts.length}`"
            class="btn bg-[#704f39] text-white"
            >❮</a
          >
          <a
            :href="`#slide${(index + 1) % gropProducts.length}`"
            class="btn bg-[#704f39] text-white"
            >❯</a
          >
        </div>
      </div>
    </template>
  </div>
</template>
<script setup>
import router from '@/router'
import { computed } from 'vue'

// data
const props = defineProps(['products', 'productId'])

// computed
const gropProducts = computed(() => {
  const gropSize = 3
  const grops = []

  const filteredProducts = props.products.filter((item) => {
    return item.id !== props.productId
  })
  for (let i = 0; i < filteredProducts.length; i += gropSize) {
    grops.push(filteredProducts.slice(i, i + gropSize))
  }

  return grops
})

// methods
function tpPage(id) {
  router.push(`/productItem/${id}`)
}
</script>
