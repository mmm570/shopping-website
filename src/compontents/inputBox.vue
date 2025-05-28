<template>
  <div class="flex flex-col gap-1">
    <input :type="props.type" placeholder="帳號" class="input" />
    <div class="text-red-500 text-sm">*錯誤</div>
  </div>
</template>
<script setup>
const props = defineProps({
  type: {
    type: String,
  },
})
</script>
