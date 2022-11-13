import { createSlice } from '@reduxjs/toolkit'
import { authAPI } from '../../API'

export const authSlice = createSlice({
   name: 'auth',
   initialState: {
      id: null,
      email: null,
      login: null,
      isAuth: false
   },
   reducers: {
      setAuthData: (state, action) => {
         state.id = action.payload.id
         state.email = action.payload.email
         state.login = action.payload.login
         state.isAuth = action.payload.isAuth
      }
   }
})

export const { setAuthData } = authSlice.actions

export const getAuthUserData = () => async (dispatch) => {
   const authData = await authAPI.me()

   if (authData.resultCode ===0) {
      dispatch(setAuthData({...authData.data, isAuth: true}))
   }
}

export const login = (email, password, rememberMe = true) => async (dispatch) => {
   const data = await authAPI.login(email, password, rememberMe)

   if (data.resultCode === 0) {
      dispatch(getAuthUserData())
   } else if (data.resultCode !== 0) {
      return data
   }
}

export const logout = () => async (dispatch) => {
   const data = await authAPI.logout()

   if (data.resultCode === 0) {
      dispatch(setAuthData({ id: null, email: null, login: null, isAuth: false }))
   }
}

export default authSlice.reducer
