import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_LAST_FM_API_URL,
})

export default api
