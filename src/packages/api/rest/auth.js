import { makeRequest } from '../makeRequest'

export const authAPI = {
   async me() {
      const response = await makeRequest(`/auth/me`, 'get', {}, {}, {'API-KEY': true})

      return response.data
   },

   async login(email, password, rememberMe = false) {
      const response = await makeRequest(`/auth/login`, 'post', {}, {email, password,rememberMe}, {'API-KEY': true})

      return response.data
   },

   async logout() {
      const response = await makeRequest(`auth/login`, 'delete', {}, {}, {'API-KEY': true})

      return response.data
   }
}
