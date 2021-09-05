import axios from 'axios'
import { Message } from 'element-ui'
import router from '@/router'
// import store from '@/store'

// 请求之前
axios.interceptors.request.use(config => {
  config.timeout = 20000
  config.headers.authorization = localStorage.crm_token
  return config
}, error => {
  return Promise.reject(error)
})

// 请求回来
axios.interceptors.response.use(res => {
  if (res.headers && (res.headers['content-type'] === 'application/csv;charset=utf-8' || 
  res.headers['content-type'] === 'application/vnd.ms-excel')) {
    return res.data
  }
  if (res.data.code !== 200) {
    Message.error(res.data.message)
  }
  return res.data
}, error => {
  const { response } = error
  if (response) {
    if (response.status !== 200) {
      Message({
        message: response.data.errors,
        type: 'error'
      })
    }
    if (response.status === 401) {
      const redirect = encodeURIComponent(window.location.pathname + window.location.search)
      router.replace(`/login?redirect=${redirect}`)
    }
  }
  return Promise.reject(error)
})

// 声明请求方法
const request = (options = {}) => {
  return axios(options)
}

export default request
