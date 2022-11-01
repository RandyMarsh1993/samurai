import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './style.module.css'

const DialogItem = ({ name, id }) => {
   return (
      <div>
         <NavLink
            to={`/dialogs/${id}`}
            className={({ isActive }) =>
               isActive ? `${style.dialogItem} ${style.active}` : style.dialogItem
            }
         >
            { name }
         </NavLink>
      </div>
   )
}

export default DialogItem
