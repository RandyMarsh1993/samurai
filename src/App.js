import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Profile from './components/Profile'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Dialogs from './components/Dialogs'
import News from './components/News'
import Settings from './components/Settings'
import Users from './components/Users'

import './App.css'

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/:userId' element={<Profile />} />
          <Route path='/dialogs/*' element={<Dialogs />} />
          <Route path='/users' element={<Users />} />
          <Route path='/news' element={<News />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
