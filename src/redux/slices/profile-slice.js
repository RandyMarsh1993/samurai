import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   posts: [
      { id: 1, text: 'First post' },
      { id: 2, text: 'Some text there' }
   ],
   newPostText: ''
}

export const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {
      addPost: (state) => {
         const newPost = {
            id: state.posts.length + 1,
            text: state.newPostText
         }
         state.posts.push(newPost)
         state.newPostText = ''
      },
      updateNewPostText: (state, action) => {
         state.newPostText = action.payload
      }
   }
})

export const { addPost, updateNewPostText } = profileSlice.actions

export default profileSlice.reducer
