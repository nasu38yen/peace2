<script setup lang="ts">
import BlogPost from '~/components/BlogPost.vue';


const { data: page } = await useAsyncData('latest-charibra', () => {
  return queryCollection('charibra')
    .order('createdAt', 'DESC') // 新しい順に並び替え
    .first()                    // 最初の1件（最新記事）を取得
})
definePageMeta({
  layout: 'bloglayout'
})
</script>

<template>
  <BlogPost v-if="page" :page="page"/>
</template>
