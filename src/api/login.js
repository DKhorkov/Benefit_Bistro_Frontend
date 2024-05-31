import makeRequest from './utils/makeRequests.js'
import config from '../config.json'

export default async function login(username, password) {
  const requestParams = {
    url: config.requests.login.url,
    method: config.requests.login.method,
    body: {
      username: username,
      password: password
    }
  }

  const response = await makeRequest(requestParams.url, requestParams.method, requestParams.body)
  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response
}
