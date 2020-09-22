export class Http {
  static HEADERS = { 'Content-Type': 'application/json' }

  static async get(url) {
    return await request(url)
  }

  static async post(url, data = {}) {
    return request(url, 'POST', data)
  }

  static async put(url, data = {}) {
    return request(url, 'PUT', data)
  }

  static async delete(url) {
    return request(url, 'DELETE')
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

  const response = await fetch(url, config)
  return await response.json()
}
