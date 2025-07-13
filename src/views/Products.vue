<template>
  <div class="py-10 w-[60%]">
    <div class="w-full border-b border-[#969C92] pb-2 mb-8 flex justify-between">
      <div class="text-[#969C92] font-bold text-xl">排序方式</div>
      <label class="swap">
        <input
          type="checkbox"
          v-model="arrangement"
          :true-value="'list'"
          :false-value="'squares'" />
        <ListBulletIcon class="swap-on fill-current size-6 text-[#969C92]" />
        <Squares2X2Icon class="swap-off fill-current size-6 text-[#969C92]"
      /></label>
    </div>
    <template v-if="arrangement === 'squares'">
      <div class="w-full grid grid-cols-3 gap-y-10">
        <template v-for="item in products" :key="item.id">
          <router-link :to="`/productItem/${item.id}`">
            <div class="shadow border border-zinc-200 rounded-xl w-[15rem] justify-self-center">
              <img
                :src="`/src/assets/products/${item.icon}.jpg`"
                alt=""
                class="object-cover rounded-t-xl size-[15rem]"
              />
              <div class="rounded-b-xl bg-white px-4 py-2 flex justify-between w-[15rem]">
                <div class="font-bold text-[#704f39]">
                  {{ item.title }}
                </div>
                <div class="text-sm text-zinc-500">$ {{ item.price.toLocaleString() }}</div>
              </div>
            </div></router-link
          >
        </template>
      </div></template
    >
    <template v-else>
      <div class="flex flex-col gap-10 w-full items-center">
        <template v-for="item in products" :key="item.id">
          <router-link :to="`/productItem/${item.id}`" class="w-[60%]">
            <div class="flex rounded-xl border border-zinc-200 shadow-sm">
              <img
                :src="`/src/assets/products/${item.icon}.jpg`"
                alt=""
                class="object-cover rounded-l-xl size-[15rem]"
              />
              <div class="rounded-r-xl px-4 py-2 flex flex-col justify-between grow">
                <div class="font-bold text-[#704f39]">
                  {{ item.title }}
                </div>
                <div class="text-right text-sm text-zinc-500">
                  $ {{ item.price.toLocaleString() }}
                </div>
              </div>
            </div>
          </router-link>
        </template>
      </div>
    </template>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { Squares2X2Icon, ListBulletIcon } from '@heroicons/vue/24/solid'

// data
const arrangement = ref('squares')
const products = ref([])

// methods
async function getProducts() {
  const res = await fetch('/products.json')
  const data = await res.json()

  products.value = data.products
}

// lifecycle
onMounted(() => {
  getProducts()
})
</script>
