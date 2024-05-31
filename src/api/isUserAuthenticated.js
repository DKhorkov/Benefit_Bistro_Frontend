import makeRequest from './utils/makeRequests.js'
import config from '../config.json'

export default async function isUserAuthenticated() {
  const requestParams = {
    url: config.requests.me.url,
    method: config.requests.me.method
  }

  const resp = await makeRequest(requestParams.url, requestParams.method, requestParams.body)
  return resp.ok
}
