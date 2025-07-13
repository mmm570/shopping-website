<template>
  <div class="w-full h-screen flex flex-col items-center relative">
    <div class="z-40 w-full sticky top-0 right-0 left-0">
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
