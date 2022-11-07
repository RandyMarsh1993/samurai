import { createSlice } from '@reduxjs/toolkit'

import { profileAPI } from '../../API'

const initialState = {
   posts: [
      { id: 1, text: 'First post' },
      { id: 2, text: 'Some text there' }
   ],
   newPostText: '',
   info: null,
   isLoading: false
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
      },
      setProfileInfo: (state, action) => {
         state.info = action.payload
      },
      setIsLoading: (state, action) => {
         state.isLoading = action.payload
      }
   }
})

export const { addPost, updateNewPostText, setProfileInfo, setIsLoading } = profileSlice.actions

export const getProfileInfo = (id) => async (dispatch) => {
   dispatch(setIsLoading(true))
   try {
      const profile = await profileAPI.fetchProfileInfo(id)

      dispatch(setProfileInfo(profile))
   } catch (err) {
      console.log('error', err)
   } finally {
      dispatch(setIsLoading(false))
   }
   
}

export default profileSlice.reducer
