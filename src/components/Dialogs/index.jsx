import React from 'react'
import { connect } from 'react-redux'

import DialogItem from './DialogItem'
import MessageItem from './MessageItem'

import style from './style.module.css'

const Dialogs = ({ dialogs, messages }) => {
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

const mapStateToProps = (state) => {
   console.log('state', state)
   return {
      dialogs: state.dialogs.dialogs,
      messages: state.dialogs.messages
   }
}

export default connect(mapStateToProps, {})(Dialogs)
