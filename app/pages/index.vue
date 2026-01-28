<script setup lang="ts">
// Nuxt 4 + Content v3 の書き方
const { data: latestPost } = await useAsyncData('latest-charibra', () => {
  return queryCollection('charibra')
    .order('createdAt', 'DESC') // 新しい順に並び替え
    .first()               // 最初の1件（最新記事）を取得
})
</script>

<template>
  <main>
    <section v-if="latestPost" class="hero-container">
        <div class="content-preview">
        <ContentRenderer v-if="latestPost" :value="latestPost" />
        </div>
    </section>
  </main>
</template>

<style scoped>
</style>