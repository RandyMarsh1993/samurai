import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, setSelectedPage } from '../../redux/slices/users-slice'
import style from './style.module.css'
import UserItem from './UserItem'
import userImg from '../../assets/images/userIcon.png'
import Pagginator from '../common/Pagginator'
import UsersSkeleton from '../common/Loaders/UsersSkeleton'

const Friends = () => {
   const { items, totalCount, pageSize, selectedPage, portionSize, isLoading } = useSelector(state => state.users)
   const dispatch = useDispatch()

   const setPage = (page) => {
      dispatch(setSelectedPage(page))
   }

   useEffect(() => {
      dispatch(getUsers(selectedPage))
   }, [selectedPage])

   const usersElements = items.map(item => (
      <UserItem
         id={item.id}
         key={item.id}
         name={item.name}
         status={item.status}
         followed={item.followed}
         imgSrc={item.photos.small ? item.photos.small : userImg}
      />
   ))

   return (
      <div>
         <h2 className={style.heading}>Users</h2>
         <Pagginator
            totalItemsCount={totalCount}
            pageSize={pageSize}
            currentPage={selectedPage}
            onSetPage={setPage}
            portionSize={portionSize}
            isLoading={isLoading}
         />
         {
            isLoading
            ? <UsersSkeleton blocksCount={7} />
            : <div className={style.usersBlock}>
                  { usersElements }
               </div>
         }
      </div>
   )
}

export default Friends
