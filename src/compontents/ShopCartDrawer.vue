<template>
  <div class="indicator" v-if="currectRouter !== 'shopCart'">
    <span
      class="indicator-item badge badge-xs badge-secondary z-2"
      v-if="Object.keys(shopCartProducts).length !== 0"
    >
      <div>{{ Object.keys(shopCartProducts).length }}</div>
    </span>
    <div class="drawer drawer-end">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" v-model="isOpenDrawer" />
      <div class="drawer-content">
        <label for="my-drawer" class="drawer-button">
          <ShoppingCartIcon class="text-[#704F39] size-5" />
        </label>
      </div>
      <div class="drawer-side z-5">
        <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
        <div class="relative h-full overflow-hidden flex flex-col">
          <div class="bg-white text-base-content h-full overflow-y-auto min-w-64 w-fit p-4">
            <div class="font-semibold text-[#704f39] font-">你的購物車</div>
            <ul>
              <template v-if="Object.keys(shopCartProducts).length === 0">
                <div>空空如也...</div>
              </template>
              <template v-for="key in Object.keys(shopCartProducts)" :key="key">
                <li class="rounded-xl hover:bg-zinc-200 active:bg-zinc-300">
                  <div class="flex p-4 gap-2">
                    <router-link :to="`/productItem/${key}`" @click="isOpenDrawer = false">
                      <img
                        :src="`/src/assets/products/${shopCartProducts[key].icon}.jpg`"
                        alt=""
                        class="object-cover rounded-xl size-[10rem]"
                    /></router-link>
                    <div class="flex flex-col justify-between py-3">
                      <router-link
                        :to="`/productItem/${key}`"
                        @click="isOpenDrawer = false"
                        class="text-base font-medium"
                      >
                        {{ shopCartProducts[key].title }}
                      </router-link>
                      <div>
                        <input
                          class="input border border-zinc-200 px-3 w-20 focus:outline-0"
                          type="number"
                          @keydown="onKeydown"
                          @input="onInput($event, key)"
                          v-model.number="shopCartProducts[key].quantity"
                        />
                      </div>
                      <div class="text-right">
                        $ {{ shopCartProducts[key].price.toLocaleString() }}
                      </div>
                    </div>
                  </div>
                </li>
              </template>
            </ul>
          </div>
          <div
            class="sticky bottom-0 left-0 w-full bg-white/80 shadow flex items-center justify-end p-2"
          >
            <button
              class="btn bg-[#969C92] hover:bg-[#b2baad] text-white w-fit"
              @click="toShopCartPage()"
            >
              進入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useShopCartStore } from '@/stores/shopCart'
import router from '@/router'
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
import Swal from 'sweetalert2'

// data
const isOpenDrawer = ref(false)
const shopCart = useShopCartStore()
const shopCartProducts = computed(() => shopCart.products)
const currectRouter = computed(() => router.currentRoute.value.name)

// methods
function toShopCartPage() {
  isOpenDrawer.value = false
  router.push('/shopCart')
}

function onKeydown(event) {
  // 限制輸入
  const invalid = ['e', 'E', '+', '-', '.']

  if (invalid.includes(event.key)) {
    event.preventDefault()
  }
}

function onInput(event, key) {
  let val = event.target.value

  if (val === '0' || val === 0) {
    Swal.fire({
      icon: 'warning',
      title: '是否要移除清單',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: '確定',
      cancelButtonText: '取消',
    }).then((result) => {
      if (result.isConfirmed) {
        delete shopCartProducts.value[key]
        return
      }

      shopCartProducts.value[key].quantity = 1
    })
  }

  if (val === '') {
    val = 1
  }

  shopCartProducts.value[key].quantity = Number(val)
}
</script>
