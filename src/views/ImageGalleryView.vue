<script setup lang="ts">
import { computed, onMounted } from 'vue'

const images = import.meta.glob<{ default: string }>(
  '/src/assets/images/*.{png,jpg,jpeg,svg,gif}',
  { eager: true },
)

const imagePaths = computed(() => {
  return Object.values(images).map((mod) => mod.default)
})
onMounted(() => {
  window.parent.postMessage(
    {
      title: 'images',
      content: imagePaths.value,
    },
    '*',
  )
})
</script>
<template>
  <img v-for="image in imagePaths" :key="image" :src="image" />
</template>
