import React from 'react'
import { useState , useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../Context/UserContext.jsx'

const UserProtectWrapper = ({
    children
}) => {

    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
        navigate('/login')
    }
    }, [token])

  return (
    <div>
        {children}
    </div>
  )
}

export default UserProtectWrapper
