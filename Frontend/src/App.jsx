import { useContext, useState } from 'react'
import { Route , Routes } from 'react-router-dom'

import './App.css'
import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import Home from './pages/Home'
import { UserDataContext } from './Context/UserContext'

function App() {

  

  return (
    <div>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/Captain-login" element={<Captainlogin />} />
        <Route path="/Captain-signup" element={<CaptainSignup />} />
       </Routes>
    </div>
  )
}

export default App
