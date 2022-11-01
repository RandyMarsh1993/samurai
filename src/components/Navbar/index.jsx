import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './style.module.css'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.list}>
                <li className={style.listItem}>
                    <NavLink
                        to="/profile"
                        className={({isActive }) =>
                            isActive ? style.active : undefined
                        }
                    >
                        Profile
                    </NavLink>
                </li>
                <li className={style.listItem}>
                    <NavLink
                        to="/dialogs"
                        className={({isActive }) =>
                            isActive ? style.active : undefined
                        }
                    >
                        Dialogs
                    </NavLink>
                </li>
                <li className={style.listItem}>
                    <NavLink
                        to="friends"
                        className={({isActive }) =>
                            isActive ? style.active : undefined
                        }
                    >
                        Friends
                    </NavLink>
                </li>
                <li className={style.listItem}>
                    <NavLink
                        to="news"
                        className={({isActive }) =>
                            isActive ? style.active : undefined
                        }
                    >
                        News
                    </NavLink>
                </li>
                <li className={style.listItem}>
                    <NavLink
                        to="settings"
                        className={({isActive }) =>
                            isActive ? style.active : undefined
                        }
                    >
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
