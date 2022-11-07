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

export default authSlice.reducer
