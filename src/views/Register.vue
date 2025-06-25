<template>
  <div class="w-full h-[80%] flex justify-center items-center">
    <div class="bg-[#f4ede3] w-[25rem] h-fit flex flex-col gap-10 items-center rounded-xl py-10">
      <div class="text-2xl font-bold text-[#704f39]">註冊</div>
      <form @submit.prevent="onSubmit" class="flex flex-col items-center w-full">
        <div class="grid grid-cols-5 gap-y-3 gap-x-3 w-full px-10 mb-10">
          <input type="text" placeholder="姓" class="input mb-5 col-span-2" />
          <InputFiled
            v-model:value="user.name"
            :errorText="formData.name.errorMessage"
            :placeholder="'名'"
            class="col-span-3"
          />
          <input type="text" placeholder="帳號" class="input mb-5 col-span-5 w-full" />
          <InputFiled
            v-model:value="user.email"
            :errorText="formData.email.errorMessage"
            :placeholder="'密碼'"
            class="col-span-5 w-full"
          />
          <input type="text" placeholder="密碼再確認" class="input mb-5 col-span-5 w-full" />
        </div>
        <button type="submit" class="btn bg-[#704f39] text-white border-0">送出</button>
      </form>
      <!-- <form @submit.prevent="onSubmit" class="flex flex-col items-center">
        <div class="flex flex-col gap-5 mb-10">
          <InputFiled
            v-model:value="user.name"
            :errorText="formData.name.errorMessage"
            :placeholder="'帳號'"
          />
          <InputFiled
            v-model:value="user.email"
            :errorText="formData.email.errorMessage"
            :placeholder="'密碼'"
          />
        </div>
        <button type="submit" class="btn bg-[#704f39] text-white border-0">送出</button>
      </form> -->
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import InputFiled from '@/compontents/tools/inputFiled.vue'
import { useMyForm } from '@/js/validate'

const registerUser = reactive({
  name: null,
  email: null,
})
const { formData, handleSubmit } = useMyForm(registerUser)

const user = reactive({
  name: formData.name.value,
  email: formData.email.value,
})

const onSubmit = handleSubmit((values) => {
  console.log('送出成功，表單資料：', values)
})
</script>
