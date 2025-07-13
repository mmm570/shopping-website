<template>
  <div class="w-[60%] h-[100%] flex justify-center items-center">
    <div class="bg-[#f4ede3] w-[50rem] h-fit flex flex-col gap-4 items-center rounded-xl py-8">
      <div class="text-2xl font-bold text-[#704f39]">註冊</div>
      <form @submit.prevent="onSubmit" id="userForm" class="flex flex-col items-center w-full">
        <div class="grid grid-cols-6 gap-y-2 gap-x-10 w-full px-10 mb-5">
          <InputFiled
            v-model="user.account"
            class="col-span-2"
            :type="'text'"
            :label="'帳號'"
            :name="'account'"
            :errorMessage="errors.account"
          />
          <InputFiled
            v-model="user.familyName"
            class="col-span-2"
            :type="'text'"
            :label="'姓'"
            :name="'familyName'"
            :errorMessage="errors.familyName"
          />
          <InputFiled
            v-model="user.lastName"
            class="col-span-2"
            :type="'text'"
            :label="'名'"
            :name="'lastName'"
            :errorMessage="errors.lastName"
          />
          <InputFiled
            v-model="user.email"
            class="col-span-6"
            :type="'text'"
            :label="'信箱'"
            :name="'email'"
            :errorMessage="errors.email"
          />
          <InputFiled
            v-model="user.password"
            class="col-span-3"
            :type="'password'"
            :label="'密碼'"
            :name="'password'"
            :errorMessage="errors.password"
          />
          <InputFiled
            v-model="user.confirmPassword"
            class="col-span-3"
            :type="'password'"
            :label="'密碼再確認'"
            :name="'confirmPassword'"
            :errorMessage="errors.confirmPassword"
          />
          <InputFiled
            v-model="user.remark"
            class="col-span-6"
            :type="'test'"
            :label="'備註'"
            :name="'remark'"
            :errorMessage="errors.remark"
          />
        </div>
        <button type="submit" form="userForm" class="btn bg-[#704f39] text-white border-0">
          送出
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import InputFiled from '@/compontents/tools/inputFiled.vue'
import useCreatedUserForm from '@/validate/createdUser'

// data
const { defineField, errors, handleSubmit } = useCreatedUserForm()

const user = reactive({
  account: defineField('account')[0],
  familyName: defineField('familyName')[0],
  lastName: defineField('lastName')[0],
  email: defineField('email')[0],
  password: defineField('password')[0],
  confirmPassword: defineField('confirmPassword')[0],
  remark: defineField('remark')[0],
})

// methods
const onSubmit = handleSubmit((values) => {
  console.log('送出成功，表單資料：', values)
})
</script>
