import { createSlice } from '@reduxjs/toolkit'

import { usersAPI } from '../../API'

export const usersSlice = createSlice({
   name: 'users',
   initialState: {
      items: [],
      totalCount: 1230,
      selectedPage: 1,
      pageSize: 20,
      portionSize: 10,
      isLoading: false
   },
   reducers: {
      setIsLoading: (state, action) => {
         state.isLoading = action.payload
      },
      setSelectedPage: (state, action) => {
         state.selectedPage = action.payload
      },
      setUsers: (state, action) => {
         state.items = action.payload
      },
      setTotalUsersCount: (state, action) => {
         state.totalCount = action.payload
      },
      follow: (state, action) => {
         state.items = state.items.map(item => item.id === action.payload ? {...item, followed: true} : item)
      },
      unfollow: (state, action) => {
         state.items = state.items.map(item => item.id === action.payload ? {...item, followed: false} : item)
      }
   }
})

export const getUsers = (page = 1, count = 20) => async (dispatch) => {
   dispatch(setIsLoading(true))
   try {
      const { items, totalCount } = await usersAPI.fetchUsers(page, count)
      dispatch(setUsers(items))
      dispatch(setTotalUsersCount(totalCount))
   } catch (err) {
      console.log(err)
   } finally {
      dispatch(setIsLoading(false))
   }
}

export const { setIsLoading, setSelectedPage, setUsers, setTotalUsersCount, follow, unfollow } = usersSlice.actions

export default usersSlice.reducer
