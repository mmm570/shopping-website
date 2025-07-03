<template>
  <div class="py-20 w-[60%] flex flex-col justify-center bg-red-300">
    <div class="w-[35%] flex flex-col justify-center gap-5">
      <div class="border-b border-[#969C92]">
        <div class="text-[#969C92] font-bold">購買人資訊</div>
      </div>
      <div class="grid grid-cols-2 justify-center w-[100%] gap-6">
        <div class="flex flex-col">
          <input type="text" placeholder="姓" class="input w-full" />
          <div class="text-red-400 h-5 text-sm">{{ isError ? '*錯誤' : null }}</div>
        </div>
        <div class="flex flex-col">
          <input type="text" placeholder="名" class="input w-full" />
          <div class="text-red-400 h-5 text-sm">{{ isError ? '*錯誤' : null }}</div>
        </div>
        <div class="col-span-2 flex flex-col">
          <input type="text" placeholder="電話號碼" class="input w-full" />
          <div class="text-red-400 h-5 text-sm">{{ isError ? '*錯誤' : null }}</div>
        </div>
        <div class="col-span-2 flex flex-col">
          <input type="text" placeholder="電子信箱" class="input w-full" />
          <div class="text-red-400 h-5 text-sm">{{ isError ? '*錯誤' : null }}</div>
        </div>
        <div class="col-span-2 flex flex-col">
          <input type="text" placeholder="備註欄" class="input w-full" />
          <div class="text-red-400 h-5 text-sm">{{ isError ? '*錯誤' : null }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
// 購買人資訊：姓名、電話號碼、電子信箱、備註欄
// 收件人資訊：（可與購買人相同）收件人姓名、收件人電話、配送地址（含郵遞區號、縣市、區域、詳細地址

const isError = false
</script>
