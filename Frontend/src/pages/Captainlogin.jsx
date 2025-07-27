import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Captainlogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captainData, setCaptainData] = useState('')


  const submitHandler = (e) => {
    e.preventDefault()
    setCaptainData = {
      email: email,
      password: password
    }
    setEmail('')
    setPassword('')
  }


  return (

    <div>
      <div className='p-7 flex flex-col justify-between h-screen'>
        <div>
          <img className='w-20 mb-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s" />
          <form action="" onSubmit={(e) => { submitHandler(e) }}>
            <h3 className="text-lg font-medium mb-2">What's you email?</h3>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="email"
              placeholder='email@example.com' />
            <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
            <input required type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete='current-password'
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              placeholder='Password' />
            <button
              className="bg-[#121111] font-bold text-white mb-2 rounded px-4 py-2  w-full text-lg placeholder:text-base"
            >Login</button>
            <p>Join a fleet? <Link to='/Captain-signup' className='text-blue-600'>Register as a Captain</Link></p>

          </form>
        </div>
        <div>
          <Link to='/login'
            className="bg-[#d1b53a] flex items-center justify-center font-bold text-white mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base"
          >Sign in as User</Link>
        </div>
      </div>
    </div>
  )
}

export default Captainlogin
