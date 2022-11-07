import React from 'react'

import userImg from '../../../assets/images/userIcon.png'

import style from './style.module.css'

const ProfileInfo = ({ info }) => {
   const { userId, fullName, photos } = info || {}

   return (
      <div className={style.profileInfo}>
         <img src={photos && photos.small ? photos.small : userImg} alt="user" className={style.profileImg} />
         <div>
            <h3>{fullName || ''}</h3>
         </div>
      </div>
   )
}

export default ProfileInfo
