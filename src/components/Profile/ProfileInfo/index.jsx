import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import userImg from '../../../assets/images/userIcon.png'
import { updateStatus } from '../../../redux/slices/profile-slice'
import Status from './Status'

import style from './style.module.css'

const ProfileInfo = ({ authUserId }) => {
   const dispatch = useDispatch()
   const { info, status } = useSelector(state => state.profile)
   const { userId, fullName, photos } = info || {}

   const handleChangeStatus = newStatus => {
      dispatch(updateStatus(newStatus))
   }

   return (
      <div className={style.profileInfo}>
         <img src={photos && photos.small ? photos.small : userImg} alt="user" className={style.profileImg} />
         <div>
            <h3 className={style.userName}>{fullName || ''}</h3>
            {userId === authUserId
            ? <Status profileStatus={status} handleChangeStatus={handleChangeStatus} />
            : <div>{status}</div>}
         </div>
      </div>
   )
}

export default ProfileInfo
