import axios from 'axios'

const instance = axios.create({
  // baseURL: "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
})

instance.interceptors.request.use(config => {
  return config
})

instance.interceptors.response.use(response => {
  return response.data
})

export default instance
