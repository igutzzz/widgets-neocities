<script setup lang="ts">
import { computed } from 'vue'

const images = import.meta.glob<{ default: string }>(
  '/src/assets/images/*.{png,jpg,jpeg,svg,gif}',
  { eager: true },
)

const imagePaths = computed(() => {
  return Object.values(images).map((mod) => mod.default)
})
</script>
<template>
  <img v-for="image in imagePaths" :key="image" :src="image" />
</template>
