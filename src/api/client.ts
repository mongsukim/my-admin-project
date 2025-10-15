import axios from 'axios'

const apiClient = axios.create({
  // baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  baseURL: 'http://localhost:3000/api',
  timeout: 10000,
})

apiClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error)
)

apiClient.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const refreshToken = localStorage.getItem('refreshToken')
        const { data } = await axios.post('/api/auth/refresh', { refreshToken })

        localStorage.setItem('accessToken', data.accessToken)
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`

        return apiClient(originalRequest)
      } catch (refreshError) {
        // localStorage.clear()
        // window.location.href = '/login'
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)

export default apiClient
