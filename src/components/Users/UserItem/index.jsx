import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { follow, unfollow } from '../../../redux/slices/users-slice'
import style from './style.module.css'

const UserItem = ({
   id,
   name,
   imgSrc,
   status,
   followed,
   followingInProgress
}) => {
   const dispatch = useDispatch()

   const onFollowClick = () => {
      dispatch(follow(id))
   }

   const onUnfollowClick = () => {
      dispatch(unfollow(id))
   }

   const isButtonDisabled = followingInProgress.some(userId => userId === id)

   return (
      <div className={style.user}>
         <div className={style.leftSide}>
            <NavLink to={`/profile/${id}`}>
               <img src={imgSrc} alt="userImg" className={style.userIcon} />
            </NavLink>
            {
               followed
               ? <button disabled={isButtonDisabled} onClick={onUnfollowClick}>unfollow</button>
               : <button disabled={isButtonDisabled} onClick={onFollowClick}>follow</button>
            }
         </div>
         <NavLink to={`/profile/${id}`} className={style.link}>
            <div className={style.rightSide}>
               <div className={style.name}>{name}</div>
               <div className={style.status}>{status}</div>
            </div>
         </NavLink>
      </div>
   )
}

export default UserItem
