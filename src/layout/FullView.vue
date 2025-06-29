<template>
  <div class="w-full h-screen flex flex-col items-center">
    <AppBar class="z-40 w-full" />
    <ViewPage class="z-10 w-full flex flex-col items-center" />
  </div>
</template>

<script setup>
import AppBar from './AppBar.vue'
import ViewPage from './ViewPage.vue'
</script>
