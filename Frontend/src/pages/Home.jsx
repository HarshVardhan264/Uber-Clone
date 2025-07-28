import React from 'react'
import { useState , useEffect , useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import LocationSearchPanel from '../Components/LocationSearchPanel'
import VehiclePanel from '../Components/VehiclePanel'
// import 'remixicons/fonts/remixicon.css'

const Home = () => {
  const [pickup, setPickup] = React.useState('')
  const [destination, setDestination] = React.useState('')
  const [panelOpen, setPanelOpen] = React.useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
    e.target.reset() // Reset the form after submission
  }

  useGSAP(function(){
    // gsap.to(panelRef.current, {
    //   height: panelOpen ? '50vh' : '0%'
    // })
    if(panelOpen){
      gsap.to(panelRef.current, {
        height: '70%',
        padding: '24'
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1,

      })
    }else{
        gsap.to(panelRef.current,{
          height: '0%',
        padding: 0})
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        })
        }
  },[panelOpen, panelCloseRef])


  return (

    <div className='relative h-screen'>
       <img className='w-16 absolute left-5 top-5' src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" />
       
       <div className= "h-screen w-screen">
         <img className='h-full w-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUia_MZ68vuezI9kMgNBLfKqWbKlQU9U2Zbg&s" alt="" />
       </div>
       <div className='flex flex-col justify-end h-screen absolute w-full bottom-0 '>
        <div className="h-[30%] bg-white  p-5 relative">
          <h5 ref={panelCloseRef}  onClick={() => {
                        setPanelOpen(false)
                    }} className='absolute opacity-0 right-6 top-6 text-2xl'>
                        <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form action="" onSubmit={(e) => {
          submitHandler(e)
        }}>
          <div className='line absolute h-16 w-1 top-[42%] bg-gray-900 left-10'></div>
          <input 
          onClick={()=> {
            setPanelOpen(true)
          }}
          value = {pickup}
          onChange={(e) => setPickup(e.target.value)}
          className="bg-[#eee] px-12 py-2  rounded-lg mt-4 w-full" 
          type="text" 
          placeholder='Enter your pickup location'  />
          <input
          onClick={()=> {
            setPanelOpen(true)
          }}
          value = {destination}
          onChange={(e) => setDestination(e.target.value)}
          className="bg-[#eee] px-12 py-2  rounded-lg mt-3 w-full " type="text" placeholder='Enter your destination'  />
         </form>
        </div>
        <div ref={panelRef} className="h-[0%] bg-white">
           <LocationSearchPanel
           setVehiclePanel={setVehiclePanel}
            />
        </div>

       </div>
       {/* <div
        // ref={vehiclePanelRef} 
        className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
                <VehiclePanel
                    // selectVehicle={setVehicleType}
                    // fare={fare} setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} 
                    />
            </div> */}
    </div>
  )
}

export default Home
