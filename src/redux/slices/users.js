import { createSlice } from '@reduxjs/toolkit'

const usersData = {
   items: [
      { id: 1, name: 'Naruto', status: 'Saskee!', photos: { small: '', large: '' }, followed: true },
      { id: 2, name: 'Hinata', status: 'Naruto!', photos: { small: '', large: '' }, followed: false }
   ],
   totalCount: '2'
}

const initialState = {}

export const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      setUsers: (state, action) => {
         state.items = action.payload
      },
      setTotalUsersCount: (state, action) => {
         state.totalCount = action.payload
      },
      follow: (state, action) => {
         state.items.forEach(item => item.id === action.payload ? item.followed = true : item)
      },
      unfollow: (state, action) => {
         state.items.forEach(item => item.id === action.payload ? item.followed = false : item)
      }
   }
})

export const { setUsers, setTotalUsersCount, follow, unfollow } = profileSlice.actions

export default usersSlice.reducer
