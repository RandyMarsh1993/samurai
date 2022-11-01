import React from 'react'
import style from './style.module.css'

const PostItem = ({ text }) => {
    return (
        <div className={style.postItem}>
            <img src="https://www.kana.fr/wp-content/uploads/2022/03/nar_wj0835_c1_1-640x640.jpg" alt="user" />
            <p>{text}</p>
        </div>
    )
}

export default PostItem
