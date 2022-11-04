import { configureStore } from '@reduxjs/toolkit'

import dialogsReducer from './slices/dialogs-slice'
import profileReducer from './slices/profile-slice'
import usersSlice from './slices/users-slice'

export const store = configureStore({
   reducer: {
      dialogs: dialogsReducer,
      profile: profileReducer,
      users: usersSlice
   }
})
