<template>
  <div class="py-20 w-[60%] flex flex-col justify-center">
    <form @submit.prevent="onSubmit" class="w-full flex flex-col justify-center gap-5">
      <div class="flex flex-col gap-5">
        <div class="border-b border-[#969C92]">
          <div class="text-[#969C92] font-bold">購買人資訊</div>
        </div>
        <div class="grid grid-cols-3 justify-center w-[100%] gap-6">
          <InputFiled
            v-model:value="purchaseParams.purchaser.name"
            :errorText="formData.purchaserName.errorMessage"
            :placeholder="'購買人姓名'"
            class="w-full"
          />
          <InputFiled
            v-model:value="purchaseParams.purchaser.phone"
            :errorText="formData.purchaserPhone.errorMessage"
            :placeholder="'購買人姓名'"
            class="w-full"
          />
          <InputFiled
            v-model:value="purchaseParams.purchaser.email"
            :errorText="formData.purchaserEmail.errorMessage"
            :placeholder="'購買人姓名'"
            class="w-full"
          />
        </div>
      </div>
      <div class="flex flex-col gap-5">
        <div class="border-b border-[#969C92]">
          <div class="text-[#969C92] font-bold">收件人資訊</div>
        </div>
        <label class="label">
          <input type="checkbox" v-model="isSomeAsTheBuyer" class="checkbox" />
          與購買人相同
        </label>
        <div class="grid grid-cols-3 justify-center w-[100%] gap-6">
          <InputFiled
            v-model:value="purchaseParams.recipient.name"
            :errorText="formData.recipientName.errorMessage"
            :placeholder="'收件人姓名'"
            class="w-full"
          />
          <InputFiled
            v-model:value="purchaseParams.recipient.phone"
            :errorText="formData.recipientPhone.errorMessage"
            :placeholder="'購買人姓名'"
            class="w-full"
          />
          <InputFiled
            v-model:value="purchaseParams.recipient.email"
            :errorText="formData.recipientEmail.errorMessage"
            :placeholder="'購買人姓名'"
            class="w-full"
          />
        </div>
      </div>
      <div class="flex flex-col gap-5">
        <div class="border-b border-[#969C92]">
          <div class="text-[#969C92] font-bold">配送地址</div>
        </div>
        <div class="grid grid-cols-3 justify-center w-[100%] gap-6">
          <select v-model="purchaseInfo.address.city" class="select">
            <option disabled selected>請選擇縣市</option>
            <template v-for="city in citys" :key="city">
              <option>{{ city }}</option></template
            >
          </select>
          <div class="col-span-2 flex flex-col">
            <input
              type="text"
              v-model="purchaseInfo.address.detail"
              placeholder="詳細地址"
              class="input w-full"
            />
            <div class="text-red-400 h-5 text-sm">{{ isError ? '*錯誤' : null }}</div>
          </div>
          <div class="col-span-3 flex flex-col">
            <input
              type="text"
              v-model="purchaseInfo.remark"
              placeholder="備註欄"
              class="input w-full"
            />
            <div class="text-red-400 h-5 text-sm">{{ isError ? '*錯誤' : null }}</div>
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <button type="submit" class="btn bg-[#704f39] text-white border-0">送出</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { inject, ref, reactive, watch } from 'vue'
import InputFiled from '@/compontents/tools/inputFiled.vue'
import { usepurchaseInfoForm } from '@/validate/purchaseInfo'
// data
const deepClone = inject('deepClone')
const isError = false
const citys = [
  '台北市',
  '基隆市',
  '新北市',
  '連江縣',
  '宜蘭縣',
  '新竹市',
  '新竹縣',
  '桃園市',
  '苗栗縣',
  '台中市',
  '彰化縣',
  '南投縣',
  '嘉義市',
  '嘉義縣',
  '雲林縣',
  '台南市',
  '高雄市',
  '澎湖縣',
  '金門縣',
  '屏東縣',
  '台東縣',
  '花蓮縣',
]
const isSomeAsTheBuyer = ref(false)
const purchaseInfo = reactive({
  purchaser: { name: null, phone: null, email: null },
  recipient: { name: null, phone: null, email: null },
  address: { city: null, detail: null },
  remark: null,
})

const { formData, handleSubmit } = usepurchaseInfoForm(purchaseInfo)
const purchaseParams = reactive({
  purchaser: {
    name: formData.purchaserName.value,
    phone: formData.purchaserPhone.value,
    email: formData.purchaserEmail.value,
  },
  recipient: {
    name: formData.recipientName.value,
    phone: formData.recipientPhone.value,
    email: formData.recipientPhone.value,
  },
  address: { city: formData.city.value, detail: formData.detail.value },
  remark: null,
})

const onSubmit = handleSubmit((values) => {
  console.log('送出成功，表單資料：', values)
})

// watch
// watch(isSomeAsTheBuyer, () => {
//   console.log(formData.recipientPhone.value)
//   if (isSomeAsTheBuyer.value) {
//     // 同步購買人資訊給收件人
//     formData.recipientName.value.value = formData.purchaserName.value.value
//     formData.recipientPhone.value.value = formData.purchaserPhone.value.value
//     formData.recipientEmail.value.value = formData.purchaserEmail.value.value
//   } else {
//     formData.recipientName.value.value = ''
//     formData.recipientPhone.value.value = ''
//     formData.recipientEmail.value.value = ''
//   }
// })
watch(isSomeAsTheBuyer, () => {
  console.log(purchaseParams.value)
  if (isSomeAsTheBuyer.value) {
    formData.purchaserPhone.value = formData.purchaserName.value
    // deepClone(purchaseInfo.value.purchaser)
  } else {
    purchaseInfo.value.recipient = { name: null, phone: null, email: null }
  }
})
</script>
