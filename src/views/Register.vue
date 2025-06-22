<template>
  <div class="max-w-md mx-auto mt-10">
    <h2 class="text-xl font-bold mb-6">註冊表單（useField）</h2>
    <form @submit.prevent="onSubmit">
      {{ formData }}
      <InputFiled v-model:value="user.name" :errorText="formData.name.errorMessage" />
      <InputFiled v-model:value="user.email" :errorText="formData.email.errorMessage" />
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">送出</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import InputFiled from '@/compontents/tools/inputFiled.vue'
import { useMyForm } from '@/js/validate'

const registerUser = reactive({
  name: 'aaa',
  email: 'mandy@gmail.com',
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
