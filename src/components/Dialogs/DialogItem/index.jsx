import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './style.module.css'

export const DialogItem = ({ name, id }) => {
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
