import DialogsReducer from './reducers/dialogs-reducer'
import ProfileReducer from './reducers/profile-reducer'

const store = {
   _callSubscriber() {},
   
   subscribe(observer) {
      this._callSubscriber = observer
   },

   getState() {
      return this._state
   },

   dispatch(action) {
      this._state.dialogs = DialogsReducer(this._state.dialogs, action)
      this._state.profile = ProfileReducer(this._state.profile, action)

      this._callSubscriber()
   },

   _state: {
      dialogs: {
         dialogs: [
            { id: 1, name: 'Saske' },
            { id: 2, name: 'Sakura' },
            { id: 3, name: 'Kakashi' },
            { id: 4, name: 'Rock Li' }
         ],
         messages: [
            { id: 1, text: 'Hello samurai' },
            { id: 2, text: 'Dattebaeye' }
         ],
      },
      profile: {
         posts: [
            { id: 1, text: 'First post' },
            { id: 2, text: 'Some text there' }
         ],
         newPostText: ''
      }
   }
}

export default store
