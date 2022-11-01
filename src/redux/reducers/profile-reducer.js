import { ADD_POST, UPDATE_NEW_POST_TEXT } from '../actionTypes/profile'

const ProfileReducer = (state, action) => {
   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            posts: [
               ...state.posts,
               {
                  id: state.posts.length + 1,
                  text: state.newPostText
               }
            ],
            newPostText: ''
         }
      case UPDATE_NEW_POST_TEXT:
         return {
            ...state,
            newPostText: action.newPostText
         }

      default: return state
   }
}

export default ProfileReducer