<script setup lang="ts">
import { computed } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { getNowPlaying } from '@/services/nowPlaying/nowPlaying'

const userName = import.meta.env.VITE_LAST_FM_USER ?? 'igutzzz'

const {
  data: nowPlaying,
  isLoading,
  error,
} = useQuery({
  queryKey: ['nowPlaying', userName],
  queryFn: () => getNowPlaying(userName),
})

const track = computed(() => nowPlaying.value?.track)
</script>

<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else>
      <template v-if="track">
        <div class="flex flex-col items-center justify-center">
          <img
            :src="
              track.image.find((i) => i.size === 'extralarge')?.['#text'] ??
              track.image[0]?.['#text']
            "
            alt="Now Playing"
          />
          <div class="flex flex-col items-center justify-center">
            <p>{{ track.album['#text'] }}</p>
            <h1 class="text-2xl font-bold">{{ track.name }} — {{ track.artist['#text'] }}</h1>
          </div>
        </div>
      </template>
      <p v-else>Nenhuma música tocando</p>
    </div>
  </div>
</template>
