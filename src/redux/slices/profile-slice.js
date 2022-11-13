import { createSlice } from '@reduxjs/toolkit'

import { profileAPI } from '../../packages/api'

const initialState = {
   posts: [
      { id: 1, text: 'First post' },
      { id: 2, text: 'Some text there' }
   ],
   newPostText: '',
   info: null,
   isLoading: false,
   status: null
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
      },
      setStatus: (state, action) => {
         state.status = action.payload
      }
   }
})

export const { addPost, updateNewPostText, setProfileInfo, setIsLoading, setStatus } = profileSlice.actions

export const getProfileInfo = (id) => async (dispatch) => {
   dispatch(setIsLoading(true))
   try {
      console.log('id', id)
      const profile = await profileAPI.fetchProfileInfo(id)
      const status = await profileAPI.fetchUserStatus(id)

      dispatch(setProfileInfo(profile))
      dispatch(setStatus(status))
   } catch (err) {
      console.log('error', err)
   } finally {
      dispatch(setIsLoading(false))
   }
}

export const updateStatus = (status) => async (dispatch) => {
   const data = await profileAPI.putStatus(status)

   if (data.resultCode === 0) {
      dispatch(setStatus(status))
   }
}

export default profileSlice.reducer
