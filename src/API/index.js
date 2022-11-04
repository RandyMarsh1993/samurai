import axios from 'axios'

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0',
   withCredentials: false
})

export const usersAPI = {
   async fetchUsers(page = 1, count = 20) {
      const response = await instance.get(`/users?count=${count}&page=${page}`)

      return response.data
   }
}
