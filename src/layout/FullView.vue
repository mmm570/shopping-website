<template>
  <div class="w-full h-screen flex flex-col items-center">
    <div class="z-40 w-full">
      <AppBar />
    </div>
    <div class="z-10 w-full grow flex flex-col items-center">
      <ViewPage />
    </div>
  </div>
</template>

<script setup>
import AppBar from './AppBar.vue'
import ViewPage from './ViewPage.vue'
</script>
