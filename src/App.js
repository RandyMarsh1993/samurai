import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Profile } from './components/Profile';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Dialogs } from './components/Dialogs';
import { News } from './components/News';
import { Settings } from './components/Settings';
import { Friends } from './components/Friends';

import './App.css';

const App = ({ store }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path='/profile' element={<Profile
            state={store.getState().profile}
            dispatch={store.dispatch.bind(store)} />}
            />
          <Route path='/dialogs/*' element={<Dialogs state={store.getState().dialogs} />} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/news' element={<News />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
