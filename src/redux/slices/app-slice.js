import { createSlice } from '@reduxjs/toolkit'
import { getAuthUserData } from './auth-slice'

export const appSlice = createSlice({
   name: 'app',
   initialState: {
      initialized: false
   },
   reducers: {
      setInitialized: (state, action) => {
         state.initialized = action.payload
      }
   }
})

export const { setInitialized } = appSlice.actions

export const initializeApp = () => async (dispatch) => {
   await dispatch(getAuthUserData())

   dispatch(setInitialized(true))
}

export default appSlice.reducer
