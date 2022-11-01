import React from "react";
import { DialogItem } from './DialogItem';
import { MessageItem } from './Message/messageItem';

import style from './style.module.css'

export const Dialogs = ({ state }) => {
   const { dialogs, messages } = state
   
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