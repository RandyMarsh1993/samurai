import React from 'react'
import { useSelector } from 'react-redux'

import DialogItem from './DialogItem'
import MessageItem from './MessageItem'

import style from './style.module.css'

const Dialogs = () => {
   const { dialogs, messages } = useSelector(state => state.dialogs)
   
   const dialogItems = dialogs.map(dialog => {
      return <DialogItem
         key={dialog.id}
         id={dialog.id}
         name={dialog.name} />
      })

   const messageItems = messages.map(message => <MessageItem key={message.id} message={message.text} />)

   return (
      <div className={style.dialogs}>
         <div>
            { dialogItems }
         </div>
         <div>
            { messageItems }
         </div>
      </div>
   )
}

export default Dialogs
