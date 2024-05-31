import config from '../../config.json'

export default async function makeRequests(url, method = 'get', body = {}, headers = {}, toJson = false) {
  let requestOptions = {
    method: method,
    headers: { ...config.requests.headers, ...headers },
    credentials: config.requests.credentials
  }

  if (['PUT', 'POST'].includes(method.toUpperCase())) {
    requestOptions['body'] = JSON.stringify(body)
  }

  const response = await fetch(url, requestOptions)

  if (toJson) {
    return await response.json()
  } else {
    return response
  }
}
