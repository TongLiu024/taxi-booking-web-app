import React from 'react'
import AutoCompleteAddress from './AutoCompleteAddress'

const Booking = () => {
  const screenHeight = screen.height*0.7
  return (
    
    <div className='p-5 bg-blue-100'>
        <h2 className='font-semibold text-[20px] text-black'>Booking</h2>
      <div className='p-2 border-blue-400-[1px] rounded-md'
      style={{height:screenHeight}}>
      <AutoCompleteAddress/>
      </div> 
    </div>
  )
}

export default Booking
