import api from '@/api/axios'
import type { TrackResponse } from './nowPlaying.types'

export const getNowPlaying = async (userName: string): Promise<TrackResponse> => {
  const response = await api.get(`${userName}/latest-song`)
  return response.data
}
