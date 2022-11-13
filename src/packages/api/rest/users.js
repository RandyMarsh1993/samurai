import { makeRequest } from '../makeRequest'

export const usersAPI = {
   async fetchUsers(page = 1, count = 20) {
      const response = await makeRequest(`/users?count=${count}&page=${page}`)

      return response.data
   },

   async follow(userId) {
      const response = await makeRequest(`/follow/${userId}`, 'post', {}, {}, {'API-KEY': true})

      return response.data
   },

   async unfollow(userId) {
      const response = await makeRequest(`/follow/${userId}`, 'delete', {}, {}, {'API-KEY': true})

      return response.data
   }
}
