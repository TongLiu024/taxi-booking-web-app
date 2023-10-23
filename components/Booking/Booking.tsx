import React from 'react'
import AutoCompleteAddress from './AutoCompleteAddress'
import Cars from './Cars'
import Cards from './Cards'


const Booking = () => {

  
  
  return (
    
    <div className='p-5 bg-white'>
        <h2 className='font-semibold text-[20px] text-black'>Booking</h2>
      <div className='p-2 border-blue-400-[1px] rounded-md'
      >
      <AutoCompleteAddress/>
      <Cars/>
      <Cards/>
      </div> 
    </div>
  )
}

export default Booking
