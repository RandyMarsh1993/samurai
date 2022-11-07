import React from 'react'
import style from './style.module.css'

const UserBlockItem = () => {
   return (
      <div className={style.user}>
         <div className={style.leftSide}>
            <div className={style.userIcon}></div>
            <div className={style.button}></div>
         </div>
         <div className={style.rightSide}>
            <div className={style.name}></div>
            <div className={style.status}></div>
         </div>
      </div>
   )
}

const UsersSkeleton = ({ blocksCount = 10 }) => {
   const userBlocks = []
   for (let i = 0; i < blocksCount; i++) {
      userBlocks.push(i)
   }

   const blockElements = userBlocks.map(u => {

      return <UserBlockItem key={u} />
   })

   return (
      <div className={style.usersBlock}>
         {blockElements}
      </div>
   )
}

export default UsersSkeleton
