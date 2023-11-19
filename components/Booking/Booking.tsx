import React from 'react'
import AutoCompleteAddress from './AutoCompleteAddress'
import Cars from './Cars'
import Cards from './Cards'


/**
 * 
 * @returns the react component of the user interface (Autocomplete Address, Car type selection, and Payment selection)
 */
const Booking = () => {

  
  
  return (
    
    <div className='p-5 bg-white'>
        <h2 className='font-semibold text-[20px] text-black'>Booking</h2>
      <div className='p-2 border-blue-400-[1px] rounded-md'
      >
      <AutoCompleteAddress/>
      <Cars/>
      <Cards/>
      <button className='w-full 
      border-[1px] 
      m-2 
      rounded-lg 
      text-[20px] 
      p-1 
      font-semibold
      bg-yellow-400'
      >
        Book
      </button>
      </div> 
    </div>
  )
}

export default Booking
