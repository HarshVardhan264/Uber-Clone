import React from 'react'
import { useState , useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../Context/CaptainContext.jsx'
import axios from 'axios'

const CaptainProtectWrapper = ({
  children
}) => {
   const token = localStorage.getItem("token")
      const navigate = useNavigate()
      const { captain, setCaptain } = React.useContext(CaptainDataContext)  
      const [isLoading, setIsLoading] = useState(true)

  
      useEffect(() => {
          if (!token) {
          navigate('/captain-login')
      }
      }, [token])

      axios.get(`${import.meta.env.VITE_API_URL}/captains/profile` , {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((response) => {
        if (response.data) {
          setCaptain(response.data.captain)
          setIsLoading(false)
        }
      }).catch(err => {
        console.error("Error fetching captain data:", err)
        localStorage.removeItem("token")
        setLoading(false)
        navigate('/captain-login')
      })

      if (isLoading) {
        return (
          <div className="loading-screen">
            <h2>Loading...</h2>
          </div>
        )
      }
  
    return (
      <div>
          {children}
      </div>
  )
}

export default CaptainProtectWrapper
