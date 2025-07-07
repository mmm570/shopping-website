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
    <button class="btn" @click="shopCart.resetShopCart()">99</button>
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
              <div class="absolute bg-white/75 blur-md w-60 h-96 rounded-xl"></div>
              <div class="absolute items-center px-5 py-20 w-60 h-96 flex flex-col gap-5">
                <div class="h-16">
                  <img :src="`/src/assets/icons/${item.icon}`" class="h-full" />
                </div>
                <div class="flex flex-col items-center gap-5">
                  <div class="text-lg font-bold text-center">
                    {{ item.title }}
                  </div>
                  <template v-for="text in item.text" :key="text">
                    <div class="text-sm font-bold text-[#704F39]">{{ text }}</div>
                  </template>
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
import { ref, onMounted } from 'vue'
import { useShopCartStore } from '@/stores/shopCart'

// data
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
