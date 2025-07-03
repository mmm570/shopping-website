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
                <div class="text-sm text-zinc-500">$ {{ item.price }}</div>
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
                <div class="text-right text-sm text-zinc-500">$ {{ item.price }}</div>
              </div>
            </div>
          </router-link>
        </template>
      </div>
    </template>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { Squares2X2Icon, ListBulletIcon } from '@heroicons/vue/24/solid'
const arrangement = ref('squares')
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
</script>
