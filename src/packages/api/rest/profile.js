import { makeRequest } from '../makeRequest'

export const profileAPI = {
   async fetchProfileInfo(id) {
      const response = await makeRequest(`/profile/${id}`)

      return response.data
   },

   async fetchUserStatus(userId) {
      const response = await makeRequest(`/profile/status/${userId}`)

      return response.data
   },

   async putStatus(status) {
      const response = await makeRequest(`/profile/status`, 'put', {}, {status}, {'API-KEY': true})

      return response.data
   }
}
