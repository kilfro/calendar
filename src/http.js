import regeneratorRuntime from 'regenerator-runtime'

export class Http {
  static HEADERS = { 'Content-Type': 'application/json' }

  static async get(url) {
    const response = await request(url)
    return await response.json()
  }

  static async post(url, data = {}) {
    return await request(url, 'POST', data)
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
    method,
    headers: Http.HEADERS,
  }

  if (method === 'POST' || method === 'PUT') {
    config.body = JSON.stringify(data)
  }

  return await fetch(url, config)
}
