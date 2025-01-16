import { ticketsAPI } from './apis'

ticketsAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwt') // Or use cookies if preferred
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)
