"use client"
import Booking from '@/components/Booking/Booking'
import MapBoxMap from '@/components/Map/MapBoxMap'

import Image from 'next/image'
import { useState , useEffect} from 'react';
import { MapboxMap } from 'react-map-gl'
import {UserLocationContext} from '../context/UserLocationContext'


export default function Home() {
  const [userLocation, setUserLocation] = useState<any>();

  useEffect(()=>{
    getUserLocation();
  }, [])

  //navigator is a built in function in js to fetch the real-time location data for the user who
  //from the client side, pos is the location data 
  //getUserLocation will get the user's location data and set the userLocation based on it
  const getUserLocation = () => {
    //funciton(pos){} is a callback function, passing the pos into the backend server and set the location 
    navigator.geolocation.getCurrentPosition(function(pos){
      setUserLocation(
        {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        }
      )
    })
  }

  return (
  
    
    //pass the useState object into the function  of userlocationcontext, so that the page 
    //element gets the latest location updates from users 
    <div>
      <UserLocationContext.Provider value={{userLocation, setUserLocation}}>

      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='bg-white'>
          <Booking/>
        </div>
        <div className='bg-white col-span-2'>
          <MapBoxMap/>
        </div>
      </div>
      </UserLocationContext.Provider>
   </div>
  
   
  )
}
