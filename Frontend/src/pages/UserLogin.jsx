import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../Context/UserContext.jsx'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState('')

  const { user , setUser } = React.useContext(UserDataContext)
  const navigate = useNavigate()


  const submitHandler = async (e) => {
    e.preventDefault()
     const userData = {
      email: email,
      password: password
     }
     const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
     


     if (response.status === 200){
      const data = response.data
      setUser(data.user) 
      localStorage.setItem("token", data.token)
      navigate("/home")
      
     }

     setEmail("")
      setPassword("")
  }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-20 mb-8' src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" />
       <form action="" onSubmit={(e)=>{submitHandler(e)}}>
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
         <p>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
         
       </form>
      </div>
      <div>
         <Link to='/Captain-login'
         className="bg-[#10b461] flex items-center justify-center font-bold text-white mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base"
         >Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin
