<template>
  <input v-model="value" type="text" placeholder="Type here" class="input" />
  <div class="text-red-400 h-8">{{ props.errorText }}</div>
</template>
<script setup>
const value = defineModel('value')
const props = defineProps(['errorText'])
</script>
