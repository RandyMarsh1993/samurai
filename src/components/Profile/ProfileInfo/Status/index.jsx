import React from 'react'
import { useState } from 'react'

const Status = ({profileStatus, handleChangeStatus}) => {
   const [status, setStatus] = useState(profileStatus)
   const [editMode, setEditMode] = useState(false)

   const onInputChange = (e) => {
      setStatus(e.target.value)
   }

   const onStatusChange = () => {
      handleChangeStatus(status)
      setEditMode(false)
   }

   const onEnterDown = (e) => {
      if (e.code === 'Enter') {
         onStatusChange()
      }
   }

   const activateEditMode = () => {
      setEditMode(true)
   }

   return (
      <div>
         {editMode
         ? <div>
            <input
               value={status}
               onChange={onInputChange}
               onBlur={onStatusChange}
               onKeyDown={onEnterDown} />
         </div>
         : <div onDoubleClick={activateEditMode}>{status}</div>}
      </div>
   )
}

export default Status
