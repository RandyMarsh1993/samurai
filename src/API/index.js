import axios from 'axios'

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0',
   withCredentials: true,
   headers: {
      "API-KEY": "2d482be5-8b27-4abd-b828-ee969f58a73d"
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
   },

   async fetchUserStatus(userId) {
      const response = await instance.get(`/profile/status/${userId}`)

      return response.data
   },

   async putStatus(status) {
      const response = await instance.put(`/profile/status`, { status })

      return response.data
   }
}

export const authAPI = {
   async me() {
      const response = await instance.get(`/auth/me`)

      return response.data
   },

   async login(email, password, rememberMe = false) {
      const response = await instance.post(`/auth/login`, { email, password, rememberMe })

      return response.data
   },

   async logout() {
      const response = await instance.delete(`auth/login`)

      return response.data
   }
}
