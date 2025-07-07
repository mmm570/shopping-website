<template>
  <div class="flex flex-col">
    <input v-model="value" type="text" :placeholder="props.placeholder" class="input" />
    <div class="text-red-400 h-5 text-sm">{{ props.errorText }}</div>
  </div>
</template>
<script setup>
// data
const value = defineModel('value')
const props = defineProps(['errorText', 'placeholder'])
</script>
