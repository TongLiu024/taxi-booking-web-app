import React, { useState } from 'react'
import carsList from '../data/carsList'
import Image from 'next/image'


const Cars = () => {

  const [selectedCar, setSelectedCar] = useState<any>()
  return (
    <div className='mt-3'>
        <h2 className='font-semibold p-1'>Select Car Type</h2>
        <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3'>
          {carsList.map((item,index) => (
            <div key={index} 
            className={
              `m-2
              p-2 
              rounded-lg
              border-[1px]
              hover:border-yellow-200
              cursor-pointer
              ${
                selectedCar==index
                ?'border-yellow-400 border-[2px]':null
              }`
            }
            onClick={()=>setSelectedCar(index)}
            >
              <Image 
              src={item.image}
              alt={item.image}
              width={75}
              height={90}
              className='w-full'
              />
              <h2 className='text-[12px] text-black font-semibold'>
                {item.name} 
                <span className='float-right font-medium'>
                  ${item.charges*8}
                </span>
              </h2>
            
            </div>
          ))}
        </div>
      
    </div>
  )
}

export default Cars
