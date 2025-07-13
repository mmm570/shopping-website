<template>
  <div class="py-20 w-[60%] flex flex-col justify-center">
    <form @submit.prevent="onSubmit" class="w-full flex flex-col justify-center gap-5">
      <div class="flex flex-col gap-5">
        <div class="border-b border-[#969C92]">
          <div class="text-[#969C92] font-bold">購買人資訊</div>
        </div>
        <div class="grid grid-cols-3 justify-center w-[100%] gap-6">
          <InputFiled
            v-model="purchaseParams.purchaserName"
            class="w-full"
            :type="'text'"
            :label="'購買人姓名'"
            :name="'purchaserName'"
            :errorMessage="errors.purchaserName"
          />
          <InputFiled
            v-model="purchaseParams.purchaserPhone"
            class="w-full"
            :type="'text'"
            :label="'購買人電話'"
            :name="'purchaserPhone'"
            :errorMessage="errors.purchaserPhone"
          />
          <InputFiled
            v-model="purchaseParams.purchaserEmail"
            class="w-full"
            :type="'email'"
            :label="'購買人電話'"
            :name="'purchaserEmail'"
            :errorMessage="errors.purchaserEmail"
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
            v-model="purchaseParams.recipientName"
            class="w-full"
            :type="'text'"
            :label="'收件人姓名'"
            :name="'recipientName'"
            :errorMessage="errors.recipientName"
          />
          <InputFiled
            v-model="purchaseParams.recipientPhone"
            class="w-full"
            :type="'text'"
            :label="'收件人電話'"
            :name="'recipientPhone'"
            :errorMessage="errors.recipientPhone"
          />
        </div>
      </div>
      <div class="flex flex-col gap-5">
        <div class="border-b border-[#969C92]">
          <div class="text-[#969C92] font-bold">配送地址</div>
        </div>
        <div class="grid grid-cols-3 justify-center w-[100%] gap-6">
          <div class="flex flex-col">
            <label class="text-[0.8rem] px-2 text-[#704f39] font-bold">縣市</label>
            <select v-model="purchaseParams.city" class="select">
              <option disabled selected>請選擇縣市</option>
              <template v-for="city in citys" :key="city">
                <option :value="city">{{ city }}</option></template
              >
            </select>
            <div class="text-red-400 h-5 text-[0.8rem] pl-4">{{ errors.city }}</div>
          </div>
          <InputFiled
            v-model="purchaseParams.addressDetail"
            class="w-full"
            :type="'text'"
            :label="'詳細地址'"
            :name="'addressDetail'"
            :errorMessage="errors.addressDetail"
          />
          <InputFiled
            v-model="purchaseParams.remark"
            class="w-full"
            :type="'text'"
            :label="'備註'"
            :name="'remark'"
            :errorMessage="errors.remark"
          />
        </div>
      </div>
      <div class="flex justify-end">
        <button type="submit" class="btn bg-[#704f39] text-white border-0">送出</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref, reactive, watch } from 'vue'
import InputFiled from '@/compontents/tools/inputFiled.vue'
import usePurchaseInfoForm from '@/validate/purchaseInfo'

// data
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
const { defineField, errors, handleSubmit } = usePurchaseInfoForm()
const purchaseParams = reactive({
  purchaserName: defineField('purchaserName')[0],
  purchaserPhone: defineField('purchaserPhone')[0],
  purchaserEmail: defineField('purchaserEmail')[0],
  recipientName: defineField('recipientName')[0],
  recipientPhone: defineField('recipientPhone')[0],
  city: defineField('city')[0],
  addressDetail: defineField('addressDetail')[0],
  remark: defineField('remark')[0],
})

// watch
watch(
  () => purchaseParams,
  () => {
    if (!isSomeAsTheBuyer.value) {
      return
    }

    purchaseParams.recipientName = purchaseParams.purchaserName
    purchaseParams.recipientPhone = purchaseParams.purchaserPhone
  },
  { deep: true },
)

watch(isSomeAsTheBuyer, () => {
  if (isSomeAsTheBuyer.value) {
    purchaseParams.recipientName = purchaseParams.purchaserName
    purchaseParams.recipientPhone = purchaseParams.purchaserPhone
    return
  }

  purchaseParams.recipientName = null
  purchaseParams.recipientPhone = null
})

// methods
const onSubmit = handleSubmit((values) => {
  console.log('送出成功，表單資料：', values)
})
</script>
