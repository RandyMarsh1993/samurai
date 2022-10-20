import React from "react";
import { DialogItem } from './DialogItem';
import { MessageItem } from './Message/messageItem';

import style from './style.module.css'

export const Dialogs = () => {
   return (
      <div className={style.dialogs}>
         <div>
            <DialogItem name="Saske" id={1} />
            <DialogItem name="Sakura" id={2} />
            <DialogItem name="Gamagichi" id={3} />
            <DialogItem name="Rock Li" id={4} />
         </div>
         <div>
            <MessageItem message="Hello" />
            <MessageItem message="Hokage" />
         </div>
      </div>
   )
}