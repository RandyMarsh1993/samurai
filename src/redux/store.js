import { configureStore } from '@reduxjs/toolkit'

import appSlice from './slices/app-slice'
import authSlice from './slices/auth-slice'
import dialogsSlice from './slices/dialogs-slice'
import profileSlice from './slices/profile-slice'
import usersSlice from './slices/users-slice'

export const store = configureStore({
   reducer: {
      dialogs: dialogsSlice,
      profile: profileSlice,
      users: usersSlice,
      auth: authSlice,
      app: appSlice
   }
})
