<script setup lang="ts">
import { computed, onMounted } from 'vue'

const images = import.meta.glob('/src/assets/images/*.{png,jpg,jpeg,svg,gif}', { eager: true })

const imagePaths = computed(() => {
  return Object.keys(images).map((path) => {
    return path.replace('/src/assets/images/', '')
  })
})

onMounted(() => {
  console.log(imagePaths)
})
</script>
<template>
  <code>{{ imagePaths }}</code>
</template>
