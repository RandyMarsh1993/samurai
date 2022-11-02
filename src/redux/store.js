import { configureStore } from '@reduxjs/toolkit'

import dialogsReducer from './slices/dialogs-slice'
import profileReducer from './slices/profile-slice'

export const store = configureStore({
   reducer: {
      dialogs: dialogsReducer,
      profile: profileReducer
   }
})
