import { createWebHistory, createRouter } from 'vue-router'

import NowPlayingView from '@/views/NowPlayingView.vue'
import ImageGalleryView from '@/views/ImageGalleryView.vue'

const routes = [
  { path: '/', component: NowPlayingView },
  { path: '/image-gallery', component: ImageGalleryView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
