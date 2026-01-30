<script setup lang="ts">
import type { CharibraCollectionItem } from '@nuxt/content'

const props = defineProps({
  page: { type: Object, required: true }
})

import { ref, watch } from 'vue'

const prev = ref<CharibraCollectionItem | null>(null)
const next = ref<CharibraCollectionItem | null>(null)

watch(() => props.page, async (p) => {
  if (!p) return
  prev.value = await queryCollection('charibra')
    .where('createdAt', '<', p.createdAt)
    .order('createdAt', 'DESC')
    .first()
  next.value = await queryCollection('charibra')
    .where('createdAt', '>', p.createdAt)
    .order('createdAt', 'ASC')
    .first()
}, { immediate: true })
</script>

<template>
  <div class=" bg-stone-200 dark:bg-stone-900 dark:text-stone-50">
      <UHeader title="" class="">
          <template #left>
              <UButton color="neutral" variant="outline" to="/" icon="i-lucide-house"></UButton>
              <UButton color="neutral" variant="outline" v-if="prev" :to="prev.path" icon="i-lucide-arrow-big-left"></UButton>
              <UButton color="neutral" variant="outline" v-if="next" :to="next.path" icon="i-lucide-arrow-big-right"></UButton>
          </template>
      </UHeader>
      <UMain class="container mx-auto max-w-screen-xl px-2">
        <ContentRenderer v-if="page" :value="page" />
      </UMain>
      <UFooter />
  </div>
</template>
