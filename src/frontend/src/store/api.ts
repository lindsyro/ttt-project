import axios from 'axios'

const api = axios.create({
  baseURL: 'https://ttt-project.onrender.com',
})

api.interceptors.request.use((config) => {
  const userId = sessionStorage.getItem('userId')

  if (userId && config.headers) {
    config.headers['x-user-id'] = userId
  }

  return config
})

export default api
