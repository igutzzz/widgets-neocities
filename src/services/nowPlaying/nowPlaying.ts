import api from '@/api/axios'
import type { RecentTracksResponse } from './nowPlaying.types'

export const getNowPlaying = async (userName: string): Promise<RecentTracksResponse> => {
  const response = await api.get(`/?method=user.getrecenttracks&user=${userName}&limit=1`)
  return response.data
}
