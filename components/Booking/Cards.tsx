import React, { useState } from 'react'
import cardsList from '../data/cardsList'
import Image from 'next/image'

/**
 * 
 * @returns the react component for the payment selection (card types or cash) as part of the user interface 
 */
const Cards = () => {

  const [selectedPayment, setSelectedPayment] = useState<any>()
  return (
    <div>
      <h2 className='font-semibold p-1'>Payment Methods</h2>
      <div className='grid grid-cols-5 items-between gap-1 ml-1'>
        {cardsList.map((item, index)=>(
          <div key={index} 
          className={`border-[1px] 
          rounded-lg 
          justify-center
          hover:border-yellow-200
          ${selectedPayment == index
          ?'border-yellow-400 border-[2px]':null}`}
          onClick={()=>setSelectedPayment(index)}>
            <Image
            src={item.image}
            alt={item.image}
            height={30}
            width={50}
            className='p-1 items-centre justify-center'/>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Cards
