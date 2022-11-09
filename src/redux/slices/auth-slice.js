import { createSlice } from '@reduxjs/toolkit'
import { authAPI } from '../../API'

export const authSlice = createSlice({
   name: 'auth',
   initialState: {
      id: null,
      email: null,
      login: null
   },
   reducers: {
      setAuthData: (state, action) => {
         state.id = action.payload.id
         state.email = action.payload.email
         state.login = action.payload.login
      }
   }
})

export const { setAuthData } = authSlice.actions

export const getIsAuth = () => async (dispatch) => {
   const authData = await authAPI.me()

   if (authData.resultCode ===0) {
      dispatch(setAuthData(authData.data))
   }
}

export const login = (email, password, rememberMe = true) => async (dispatch) => {
   const data = await authAPI.login(email, password, rememberMe)

   if (data.resultCode === 0) {
      console.log('if!')
      dispatch(getIsAuth())
   }
}

export const logout = () => async (dispatch) => {
   const data = await authAPI.logout()

   if (data.resultCode === 0) {
      dispatch(setAuthData({id: null, email: null, login: null}))
   }
}

export default authSlice.reducer
