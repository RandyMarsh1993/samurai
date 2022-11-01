import { ADD_POST, UPDATE_NEW_POST_TEXT } from '../actionTypes/profile'

export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = (newPostText) => ({ type: UPDATE_NEW_POST_TEXT, newPostText })
