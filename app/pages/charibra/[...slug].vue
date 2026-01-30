<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('charibra').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
// blog用のレイアウト
definePageMeta({
  layout: 'bloglayout'
})
</script>

<template>
  <BlogPost v-if="page" :page="page"/>
</template>
