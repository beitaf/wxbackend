import request from './axios'
import api from './api'
const baseUrl = process.env.VUE_APP_API
class Model {
  constructor(baseURL, options = {}) {
    this.api = api
    this.options = {
      baseURL: baseURL || baseUrl,
      // withCredentials: true,
      ...options
    }
  }
  get(options={}) {
    return request({
      method: 'get',
      ...options,
      ...this.options
    })
  }

  post(options={}) {
    return request({
      method: 'post',
      ...options,
      ...this.options
    })
  }
}

export default Model