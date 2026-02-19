import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_LAST_FM_API_URL,
  params: {
    api_key: import.meta.env.VITE_LAST_FM_API_KEY,
    format: 'json',
  } as Record<string, string>,
})

export default api
