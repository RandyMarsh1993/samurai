import { combineReducers, createStore } from 'redux'

import DialogsReducer from './reducers/dialogs-reducer'
import ProfileReducer from './reducers/profile-reducer'

const reducers = combineReducers({ dialogs: DialogsReducer, profile: ProfileReducer })

const store = createStore(reducers)

export default store
