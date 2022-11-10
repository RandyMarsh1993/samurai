import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getIsAuth } from './redux/slices/auth-slice'
import Profile from './components/Profile'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Dialogs from './components/Dialogs'
import News from './components/News'
import Settings from './components/Settings'
import Users from './components/Users'
import Login from './components/Login'

import './App.css'

const App = () => {
  const dispatch = useDispatch()
  const { isAuth, login } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(getIsAuth())
  })

  return (
    <div className="app-wrapper">
      <Header isAuth={isAuth} login={login} />
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path='/'>
            <Route path='/login' element={<Login isAuth={isAuth} />} />
            <Route path='/profile' element={<Profile isAuth={isAuth} />} />
            <Route path='/profile/:userId' element={<Profile isAuth={isAuth} />} />
            <Route path='/dialogs/*' element={<Dialogs />} />
            <Route path='/users' element={<Users />} />
            <Route path='/news' element={<News />} />
            <Route path='/settings' element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
