import React from 'react'

const AutoCompleteAddress = () => {
  return (
    <div className='text-black mt-2'>
      <form action="">
        <div>
          <label className='text-gray-800'>Where From?</label>
          <input type='text' 
          className='rounded-md border-[1px] w-full p-2 outline-none focus:border-purple-200' />
        </div>
        <div>
          <label className='text-gray-800'>Where to?</label>
          <input type="text"
          className='rounded-md border-[1px] w-full p-2 outline-none focus:border-purple-200' />
        </div>
      </form>
    </div>
  )
}

export default AutoCompleteAddress
