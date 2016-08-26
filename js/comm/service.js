import 'whatwg-fetch'

const HOST='http://127.0.0.1:5000'

export function api(url,options){
  return fetch(HOST+url,options)
}