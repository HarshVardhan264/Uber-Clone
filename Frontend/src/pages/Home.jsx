import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className = 'bg-cover bg-center h-screen pt-8  flex justify-between flex-col w-full bg-[url("https://images.unsplash.com/photo-1527603815363-e79385e0747e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww")]'>
        <img className='w-18 ml-8' src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" />
         <div className="bg-white pb-8 py-4 px-4 ">
            <h2 className ='text-3xl font-bold '>Get Started with Uber</h2>
            <Link to='/login' className='inline-block text-center w-full bg-black text-white py-3 px-2 rounded mt-5'>Continue</Link>
         </div>
      </div>
    </div>
  )
}

export default Home
