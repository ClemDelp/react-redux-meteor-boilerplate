// polyfills fetch on window object, if necessary
require('whatwg-fetch')

export function apiRequest (endpoint, requestConfig = {}, cb) {
  // NOTE: assumes all calls are JSON in this API
  requestConfig.headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  // NOTE: assumes body wasn't already stringified
  if (requestConfig.body) {
    requestConfig.body = JSON.stringify(requestConfig.body)
  }
  return window.fetch(endpoint, requestConfig)
  .then(res => res.json())
  .then(json => {
    if (cb) cb(json)
    return json || {}
  })
}
