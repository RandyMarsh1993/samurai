import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { logout } from '../../redux/slices/auth-slice'

import style from './style.module.css'

const Header = ({ isAuth, login }) => {
    const dispatch = useDispatch()

    const logoutClickHandler = () => {
        dispatch(logout())
    }

    return (
        <header className={style.header}>
            <img src="https://png.pngitem.com/pimgs/s/595-5953266_konoha-symbol-png-naruto-konoha-transparent-png.png" alt="kanoha" />
            <div>
                {isAuth
                    ? <div className={style.rightSide}>
                        <div className={style.userName}>{login}</div>
                        <div className={style.link} onClick={logoutClickHandler}>Logout</div>
                    </div> : <Link to="/login" className={style.link}>Login</Link>}
            </div>
        </header>
    )
}

export default Header
