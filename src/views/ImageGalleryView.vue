<script setup lang="ts">
import { computed, onMounted } from 'vue'

const images = import.meta.glob('/src/assets/images/*.{png,jpg,jpeg,svg,gif}', { eager: true })

const imagePaths = computed(() => {
  return Object.keys(images)
})

onMounted(() => {
  console.log(imagePaths)
})
</script>
<template>
  <img v-for="image in imagePaths" :key="image" :src="image" />
</template>
