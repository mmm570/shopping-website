<template>
  <div class="max-w-md mx-auto mt-10">
    <h2 class="text-xl font-bold mb-6">註冊表單（useField）</h2>
    <Form @submit="onSubmit">
      <!-- 姓名欄位 -->
      {{ nameerrorMessage }}
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">姓名</label>
        <InputFiled v-model:value="emailValue" :errorText="emailMeta.errors[0]" />
        <InputFiled v-model:value="nameValue" :errorText="nameMeta.errors[0]" />
      </div>

      <button type="submit" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        送出
      </button>
    </Form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputFiled from '@/compontents/tools/inputFiled.vue'
import { formSchema } from '@/js/validate'
// const userName = ref(null)

import { useForm, useField, Form } from 'vee-validate'
// import * as yup from 'yup'

// 定義 Yup 驗證規則

useForm({ validationSchema: formSchema })

// 使用 useField 建立欄位

// const aaa = AAA()
const { value: nameValue, meta: nameMeta } = useField('name')
const { value: emailValue, meta: emailMeta, errorMessage: nameerrorMessage } = useField('email')

// 提交處理
const onSubmit = (values) => {
  console.log('提交成功：', values)
}
</script>
