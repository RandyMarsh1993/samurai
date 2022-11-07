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
      isLoading: false,
      followingInProgress: []
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
      setFollow: (state, action) => {
         state.items = state.items.map(item => item.id === action.payload ? {...item, followed: true} : item)
      },
      setUnfollow: (state, action) => {
         state.items = state.items.map(item => item.id === action.payload ? {...item, followed: false} : item)
      },
      setFollowingInProgress: (state, action) => {
         state.followingInProgress = action.payload.isFetching ? 
            [...state.followingInProgress, action.payload.userId] :
            state.followingInProgress.filter(id => id !== action.payload.userId)
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

export const follow = (userId) => async (dispatch) => {
   dispatch(setFollowingInProgress({userId, isFetching: true}))
   const response = await usersAPI.follow(userId)

   if (response.resultCode === 0) {
      dispatch(setFollow(userId))
   }
   dispatch(setFollowingInProgress({userId, isFetching: false}))
}

export const unfollow = (userId) => async (dispatch) => {
   dispatch(setFollowingInProgress({userId, isFetching: true}))
   const response = await usersAPI.unfollow(userId)

   if (response.resultCode === 0) {
      dispatch(setUnfollow(userId))
   }
   dispatch(setFollowingInProgress({userId, isFetching: false}))
}

export const { setIsLoading, setSelectedPage, setUsers, setTotalUsersCount, setFollow, setUnfollow, setFollowingInProgress } = usersSlice.actions

export default usersSlice.reducer
