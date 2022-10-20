import React from 'react';

import style from './style.module.css'

export const ProfileInfo = () => {
   return (
      <div className={style.profileInfo}>
         <img src="https://www.kana.fr/wp-content/uploads/2022/03/nar_wj0835_c1_1-640x640.jpg" alt="user" className={style.profileImg} />
         <div>
            <h3>Uzumaki Naruto</h3>
         </div>
      </div>
   )
}
