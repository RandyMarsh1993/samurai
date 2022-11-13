import axios from 'axios'
import { config } from './config'

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0',
   withCredentials: true
})

export const makeRequest = async (
   url = '/',
   method = 'get',
   params = {},
   data = {},
   headers = {}
) => {
   if (headers && headers['API-KEY']) {
      headers['API-KEY'] = config.getConfig()["API-KEY"]
      console.log('headers', headers)
   }

   return instance({
      url,
      method,
      params,
      data,
      headers
   }).catch((error) => {
      throw error
   })
}
