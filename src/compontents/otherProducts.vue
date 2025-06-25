<template>
  <div class="w-[60%] border-b border-[#969C92]">
    <div class="text-[#969C92] font-bold">其他相關產品</div>
  </div>
  <div class="grid grid-cols-5 gap-10 px-20">
    <div></div>
    <template v-for="item in [...Array(3).keys()]" :key="item">
      <!-- {{ item }} -->
      <div class="bg-white shadow-md p-5 rounded-xl flex flex-col items-center gap-2">
        <img
          :src="`/src/assets/products/${props.products[index + item].icon}.jpg`"
          alt=""
          class="object-cover w-full h-60"
        />
        <div>{{ props.products[index + item].title }}</div>
      </div>
    </template>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps(['products'])
const index = ref(0)
</script>
