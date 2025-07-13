<template>
  <div class="flex flex-col">
    <label class="text-[0.8rem] px-2 text-[#704f39] font-bold">{{ props.label }}</label>
    <input v-model="value" :type="props.type" class="input w-full" />
    <div class="text-red-400 h-5 text-[0.8rem] pl-4">{{ errorMessage }}</div>
  </div>
</template>

<script setup>
import { useField } from 'vee-validate'

const props = defineProps({
  label: String,
  name: String,
  type: String,
})

const { value, errorMessage } = useField(() => props.name)
</script>
