import { useContext, useState } from 'react'
import { Route , Routes } from 'react-router-dom'
import UserProtectWrapper from './pages/UserProtectWrapper'

import './App.css'
import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import Start from './pages/Start'
import { UserDataContext } from './Context/UserContext'
import Home from './pages/Home'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainLogout from './pages/CaptainLogout'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'

function App() {

  return (
    <div>
       <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/Captain-login" element={<Captainlogin />} />
        <Route path="/Captain-signup" element={<CaptainSignup />} />
        <Route path="/Home" element={
          <UserProtectWrapper>
            <Home />
          </UserProtectWrapper>
        } />
        <Route path='/user/logout'
          element={<UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
          } />
        <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>

        } />
        <Route path='/captain/logout' element={
          <CaptainProtectWrapper>
            <CaptainLogout />
          </CaptainProtectWrapper>
        } />
       </Routes>
    </div>
  )
}

export default App
