import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add interceptors if needed
api.interceptors.request.use((config) => {
  // Add token if exists
  return config
})

export default api
