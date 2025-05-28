<template>
  <div class="w-full flex justify-center">
    <div class="w-[60%] flex flex-col gap-10 mt-10">
      <div class="breadcrumbs text-sm">
        <ul>
          <li><router-link to="/" class="text-[#704f39] underline">首頁</router-link></li>
          <li>{{ productItem.title }}</li>
        </ul>
      </div>
      <div class="flex gap-10">
        <img
          :src="`/src/assets/products/${productItem.icon}.jpg`"
          alt=""
          class="object-cover w-96 h-96"
        />
        <div class="flex flex-col justify-between">
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
            <div>{{ productItem.description }}</div>
            <div>$ {{ productItem.price }}</div>
            <div class="text-[#704f39] text-sm">#{{ productItem.promotion }}</div>
          </div>
          <div class="w-full flex justify-end">
            <div
              class="btn bg-[#704f39] text-white w-fit px-5"
              @click="shopCart.addToShopCart(productItem)"
            >
              加入購物車
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useShopCartStore } from '@/stores/shopCart'

const shopCart = useShopCartStore()
const props = defineProps(['id'])
const productItem = ref({})
const products = ref([
  {
    icon: 'product01',
    id: 'P001',
    title: '仙人掌精華液',
    description: '萃取自高原仙人掌的保濕精華，深層補水、強韌肌膚屏障，為乾燥肌注入清新能量。',
    price: '980',
    promotion: '首購享88折＋贈旅行瓶5ml',
    score: 4.5,
  },
  {
    icon: 'product02',
    id: 'P002',
    title: '賦活修護精華油',
    description: '融合多種天然植萃精華油，修護疲憊肌膚，重現潤澤光采，適合夜間使用。',
    price: '1,280',
    promotion: '任選兩件精華系列85折',
    score: 4,
  },
  {
    icon: 'product03',
    id: 'P003',
    title: '賦活滋養乳霜',
    description: '質地濃潤卻不黏膩，深入滋養乾燥肌膚，提升肌膚彈性與光澤。',
    price: '1,180',
    promotion: '限時加購價 $890（搭配精華油）',
    score: 4.5,
  },
  {
    icon: 'product04',
    id: 'P004',
    title: '水光持久粉底液',
    description: '輕盈水潤妝感，遮瑕同時打造自然光澤肌，持妝長達12小時。',
    price: '980',
    promotion: '買粉底送定妝噴霧迷你瓶',
    score: 4,
  },
  {
    icon: 'product05',
    id: 'P005',
    title: '竹葉檸香蠟燭',
    description: '竹葉的清爽與檸檬的清香交織，營造沉靜自然的居家氛圍。',
    price: '680',
    promotion: '任選2入享9折＋禮盒包裝',
    score: 4.5,
  },
  {
    icon: 'product06',
    id: 'P006',
    title: '維他檸香精華液',
    description: '富含維他命C與檸檬萃取，提亮膚色，改善暗沉，早晚皆可使用。',
    price: '1,080',
    promotion: '搭配乳液同購享85折',
    score: 4,
  },
  {
    icon: 'product07',
    id: 'P007',
    title: '白木蘭葉淡香水',
    description: '優雅木蘭與青綠葉香調，淡雅清新，低調展現個人魅力。',
    price: '1,380',
    promotion: '香氛系列任選兩件享85折',
    score: 4.5,
  },
  {
    icon: 'product08',
    id: 'P008',
    title: '桔橘磨砂霜',
    description: '天然果粒與植物油配方，溫和去角質同時滋潤肌膚，散發柑橘香氣。',
    price: '780',
    promotion: '身體保養任選2件9折',
    score: 4.5,
  },
  {
    icon: 'product09',
    id: 'P009',
    title: '桔橘保濕化妝水',
    description: '質地輕盈快速吸收，提升肌膚含水量，為後續保養打底。',
    price: '680',
    promotion: '化妝水搭配精華液享88折',
    score: 4,
  },
  {
    icon: 'product10',
    id: 'P010',
    title: '賦活滋養生體乳',
    description: '蘊含多重植萃精華，長效鎖水，舒緩乾癢與粗糙，提升肌膚柔嫩度。',
    price: '880',
    promotion: '身體保養任選2件9折',
    score: 4.5,
  },
  {
    icon: 'product11',
    id: 'P011',
    title: '維他檸香精華乳',
    description: '清爽質地卻富含滋養力，檸檬香氣振奮身心，打造亮澤肌膚。',
    price: '980',
    promotion: '精華系列2件以上85折',
    score: 4,
  },
  {
    icon: 'product12',
    id: 'P012',
    title: '熟果美白乳液',
    description: '萃取多種熟成果實精華，有效提亮膚色與均勻膚質，適合日間保養。',
    price: '1,080',
    promotion: '買乳液送體驗瓶20ml',
    score: 4.5,
  },
])

function setProductItem() {
  productItem.value = products.value.find((item) => {
    return item.id === props.id
  })
}

onMounted(() => {
  setProductItem()
})
</script>
