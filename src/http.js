import axios from 'axios'
import regeneratorRuntime from 'regenerator-runtime'

export class Http {
  static HEADERS = { 'Content-Type': 'application/json' }

  static async get(url) {
    const response = await request(url)
    return await response.data
  }

  static async post(url, data = {}) {
    return await axios.post(url, data)
    // return await request(url, 'POST', data)
  }

  static async put(url, data = {}) {
    return await request(url, 'PUT', data)
  }

  static async delete(url) {
    return await request(url, 'DELETE')
  }
}

async function request(url, method = 'GET', data) {
  const config = {
    url,
    method,
  }

  if (method === 'POST' || method === 'PUT') {
    config.data = data
  }

  return await axios(config)
}
