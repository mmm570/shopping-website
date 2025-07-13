<template>
  <div class="py-20 w-[60%] flex flex-col justify-center">
    <div class="tabs tabs-lift">
      <input
        type="radio"
        name="my_tabs_3"
        class="tab [--tab-bg:#704f39] text-white"
        aria-label="訂單紀錄"
      />
      <div class="tab-content bg-base-100 border-base-300 p-6">訂單紀錄</div>

      <input
        type="radio"
        name="my_tabs_3"
        class="tab [--tab-bg:#704f39] text-white"
        aria-label="歷史訂單"
        checked="checked"
      />
      <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

      <input
        type="radio"
        name="my_tabs_3"
        class="tab [--tab-bg:#704f39] text-white"
        aria-label="Tab 3"
      />
      <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
    </div>
  </div>
</template>
<script setup></script>
