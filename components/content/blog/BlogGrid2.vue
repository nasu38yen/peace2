<script setup lang="ts">
const data = 
  [
    { _path: "https://bmop4.peace2.jp/blog/last ", title: "日記", description: "" },
  ];
</script>

<template>
  <div class="not-prose grid grid-cols-1 lg:grid-cols-4 gap-4">
    <UiCard v-for="i in data" :item="i" />
  </div>
</template>