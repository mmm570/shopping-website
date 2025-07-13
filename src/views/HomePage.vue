<template>
  <div class="w-full">
    <div class="relative">
      <img src="../assets/homePageImg.jpg" class="object-cover" />
      <div class="w-full h-full absolute bottom-0 right-0 grid grid-cols-7 bg-white opacity-50">
        <div
          class="h-full flex justify-start items-center col-start-6 col-span-2 text-[2rem] font-bold text-[#704F39]"
        >
          純粹修護，極致呵護
        </div>
      </div>
    </div>
    <div class="pt-30 flex justify-center">
      <div class="w-[80%] text-[1.5rem] text-[#969C92] font-mono text-center font-bold">
        來自大自然的溫和能量，LIWO 採用嚴選植萃精華，讓肌膚深呼吸，回歸健康透亮。
      </div>
    </div>
    <div class="py-40 flex justify-center">
      <div class="w-[80%] grid grid-flow-col grid-cols-8 grid-rows-2 gap-8">
        <div class="col-span-2 row-span-3 bg-red-100">
          <div class="w-full h-full">
            <img src="../assets/texture/texture01.jpg" class="object-over w-full h-full" />
          </div>
        </div>

        <div class="col-span-6 row-span-1 flex justify-end">
          <div class="flex flex-col justify-center gap-5 w-[400px] h-full px-10">
            <div class="text-lg font-bold">[新品] {{ specialOffers.title }}</div>
            <div class="text-base w-fit">{{ specialOffers.description }}</div>

            <div class="w-full flex justify-end gap-3">
              <span
                class="badge badge-sm badge-outline text-[#969C92] border-[#969C92] bg-white rounded-full"
                >修護肌膚屏障</span
              >
              <span
                class="badge badge-sm badge-outline text-[#969C92] border-[#969C92] bg-white rounded-full"
                >激活細胞</span
              >
            </div>
            <div class="w-full flex justify-end">
              <button
                class="btn bg-[#969C92] hover:bg-[#b2baad] text-white"
                @click="shopCart.addToShopCart(specialOffers)"
              >
                新增到購物車
              </button>
            </div>
          </div>
        </div>
        <div class="col-span-6 row-span-2 flex justify-between items-end gap-8">
          <div class="w-fit h-fit">
            <img src="../assets/texture/texture02.png" class="object-contain h-full" />
          </div>

          <div class="w-fit h-fit">
            <img src="../assets/texture/texture05.png" class="object-contain h-full" />
          </div>
          <div class="w-fit h-fit">
            <img src="../assets/texture/texture03.png" class="object-contain h-full" />
          </div>
          <div class="w-fit h-fit">
            <img src="../assets/texture/texture06.png" class="object-contain h-full" />
          </div>
        </div>
      </div>
    </div>
    <div class="w-full py-40 flex justify-center bg-[#f4ede3] bg-cover bg-center">
      <div class="grid grid-cols-6 gap-10 justify-center w-[80%]">
        <template v-for="item in products" :key="item.icon">
          <router-link :to="`/productItem/${item.id}`" class="black">
            <div class="w-48 h-48 relative">
              <img
                :src="`/src/assets/products/${item.icon}.jpg`"
                alt=""
                class="absolute object-cover w-48 h-48"
              />
              <div
                class="opacity-0 hover:opacity-100 hover:bg-black/50 duration-300 absolute -inset-3 z-10 flex justify-center items-center text-xl text-white font-semibold"
              >
                {{ item.title }}
              </div>
            </div></router-link
          >
        </template>
      </div>
    </div>
    <div
      class="w-full py-40 flex justify-center bg-[url(/src/assets/plant.jpg)] bg-cover bg-center"
    >
      <div class="w-[80%] flex flex-col gap-16">
        <div class="text-[3.5rem] text- font-mono text-center font-bold">OUR PHILOSOPHY</div>
        <div class="grid grid-cols-4 gap-20 justify-between px-20">
          <template v-for="item in Object.values(brandPurpose)" :key="item">
            <div class="relative flex flex-col gap-10 w-60 h-96">
              <div class="absolute bg-white/75 w-60 h-96 rounded-xl"></div>
              <div class="absolute items-center px-5 py-20 w-60 h-96 flex flex-col gap-5">
                <div class="h-16">
                  <img :src="`/src/assets/icons/${item.icon}`" class="h-full" />
                </div>
                <div class="flex flex-col items-center gap-5">
                  <div class="text-lg font-bold text-center">
                    {{ item.title }}
                  </div>
                  <div class="flex flex-col items-center gap-3">
                    <template v-for="text in item.text" :key="text">
                      <div class="text-sm font-bold text-[#704F39]">{{ text }}</div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useShopCartStore } from '@/stores/shopCart'

const shopCart = useShopCartStore()
const specialOffers = ref({
  icon: 'product01',
  id: 'P001',
  title: '賦活修護精華油',
  description:
    '天早晨，給肌膚一份溫柔的禮物。富含玻尿酸與洋甘菊萃取，輕盈質地迅速滲透肌底，為肌膚注入源源水分，喚醒沉睡的光澤感。無酒精、無香料，敏弱肌也能安心使用。',
  price: '980',
  promotion: '首購享88折＋贈旅行瓶5ml',
})
const brandPurpose = ref({
  pure_leaf_drop: {
    icon: 'pure_leaf_drop.png',
    title: '純淨成分',
    text: ['萃取大自然的溫和能量', '讓肌膚深呼吸。'],
  },
  repair_hand_drop: {
    icon: 'repair_hand_drop.png',
    title: '高效修護',
    text: ['精準調配活性成分，補水鎖水', '修護肌膚屏障，打造健康光澤。'],
  },
  no_additives: {
    icon: 'no_additives.png',
    title: '無添加負擔',
    text: ['無酒精、無人工香精、無礦物油', '敏弱肌也能安心使用。'],
  },
  eco_recycle: {
    icon: 'eco_recycle.png',
    title: '環保永續',
    text: ['友善環境的配方與包裝', '讓美麗與地球共存。'],
  },
})

const products = ref([
  {
    icon: 'product01',
    id: 'P001',
    title: '仙人掌精華液',
    description: '萃取自高原仙人掌的保濕精華，深層補水、強韌肌膚屏障，為乾燥肌注入清新能量。',
    price: '$980',
    promotion: '首購享88折＋贈旅行瓶5ml',
  },
  {
    icon: 'product02',
    id: 'P002',
    title: '賦活修護精華油',
    description: '融合多種天然植萃精華油，修護疲憊肌膚，重現潤澤光采，適合夜間使用。',
    price: '$1,280',
    promotion: '任選兩件精華系列85折',
  },
  {
    icon: 'product03',
    id: 'P003',
    title: '賦活滋養乳霜',
    description: '質地濃潤卻不黏膩，深入滋養乾燥肌膚，提升肌膚彈性與光澤。',
    price: '$1,180',
    promotion: '限時加購價 $890（搭配精華油）',
  },
  {
    icon: 'product04',
    id: 'P004',
    title: '水光持久粉底液',
    description: '輕盈水潤妝感，遮瑕同時打造自然光澤肌，持妝長達12小時。',
    price: '$980',
    promotion: '買粉底送定妝噴霧迷你瓶',
  },
  {
    icon: 'product05',
    id: 'P005',
    title: '竹葉檸香蠟燭',
    description: '竹葉的清爽與檸檬的清香交織，營造沉靜自然的居家氛圍。',
    price: '$680',
    promotion: '任選2入享9折＋禮盒包裝',
  },
  {
    icon: 'product06',
    id: 'P006',
    title: '維他檸香精華液',
    description: '富含維他命C與檸檬萃取，提亮膚色，改善暗沉，早晚皆可使用。',
    price: '$1,080',
    promotion: '搭配乳液同購享85折',
  },
  {
    icon: 'product07',
    id: 'P007',
    title: '白木蘭葉淡香水',
    description: '優雅木蘭與青綠葉香調，淡雅清新，低調展現個人魅力。',
    price: '$1,380',
    promotion: '香氛系列任選兩件享85折',
  },
  {
    icon: 'product08',
    id: 'P008',
    title: '桔橘磨砂霜',
    description: '天然果粒與植物油配方，溫和去角質同時滋潤肌膚，散發柑橘香氣。',
    price: '$780',
    promotion: '身體保養任選2件9折',
  },
  {
    icon: 'product09',
    id: 'P009',
    title: '桔橘保濕化妝水',
    description: '質地輕盈快速吸收，提升肌膚含水量，為後續保養打底。',
    price: '$680',
    promotion: '化妝水搭配精華液享88折',
  },
  {
    icon: 'product10',
    id: 'P010',
    title: '賦活滋養生體乳',
    description: '蘊含多重植萃精華，長效鎖水，舒緩乾癢與粗糙，提升肌膚柔嫩度。',
    price: '$880',
    promotion: '身體保養任選2件9折',
  },
  {
    icon: 'product11',
    id: 'P011',
    title: '維他檸香精華乳',
    description: '清爽質地卻富含滋養力，檸檬香氣振奮身心，打造亮澤肌膚。',
    price: '$980',
    promotion: '精華系列2件以上85折',
  },
  {
    icon: 'product12',
    id: 'P012',
    title: '熟果美白乳液',
    description: '萃取多種熟成果實精華，有效提亮膚色與均勻膚質，適合日間保養。',
    price: '$1,080',
    promotion: '買乳液送體驗瓶20ml',
  },
])
</script>
