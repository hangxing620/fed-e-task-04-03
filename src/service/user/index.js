import axios from 'axios'

export function signUp(data) {
  return axios.post('https://conduit.productionready.io/api/users', data)
}
export function signIn(data) {
  return axios.post('https://conduit.productionready.io/api/users/login', data)
}