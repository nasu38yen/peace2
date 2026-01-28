<template>
  <div class="photo-card" :style="{ gridAutoFlow: reverse ? 'dense' : 'row' }">
    <div class="photo-card-image" :class="{ 'reverse-order': reverse }">
      <img :src="image" :alt="'photo image'" class="photo-card-img" />
    </div>
    <div class="photo-card-content" :class="{ 'reverse-order': reverse }">
      <div class="photo-card-description">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true
  },
  reverse: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.photo-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  align-items: start;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  margin: 1.5rem 0;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;

}

.photo-card-image {
  overflow: hidden;
  width: 100%;
  min-width: 0;
}

.photo-card-image.reverse-order {
  order: 2;
}

.photo-card-content.reverse-order {
  order: 1;
}

.photo-card-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.photo-card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  min-width: 0;
}

.photo-card-description {
  color: #4b5563;
  font-size: 1.2rem;
  line-height: 1.6;
  word-wrap: break-word;
}

.photo-card-description :deep(*) {
  margin: 0;
  padding: 0;
}

.photo-card-description :deep(p) {
  display: inline;
}

.photo-card-description :deep(p + p)::before {
  content: '\A';
  white-space: pre;
}

/* レスポンシブ */
@media (max-width: 768px) {
  .photo-card {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .photo-card-image.reverse-order,
  .photo-card-content.reverse-order {
    order: unset;
  }
}
</style>
