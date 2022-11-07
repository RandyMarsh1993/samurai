import axios from 'axios'

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0',
   withCredentials: true,
   headers: {
      "API-KEY": "3852c5f1-1d20-4e68-8335-f7206b8bafef"
   }
})

export const usersAPI = {
   async fetchUsers(page = 1, count = 20) {
      const response = await instance.get(`/users?count=${count}&page=${page}`)

      return response.data
   },

   async follow(userId) {
      const response = await instance.post(`/follow/${userId}`)

      return response.data
   },

   async unfollow(userId) {
      const response = await instance.delete(`/follow/${userId}`)

      return response.data
   }
}

export const profileAPI = {
   async fetchProfileInfo(id) {
      const response = await instance.get(`/profile/${id}`)

      return response.data
   }
}

export const authAPI = {
   async me() {
      const response = await instance.get('/auth/me')

      return response.data
   }
}