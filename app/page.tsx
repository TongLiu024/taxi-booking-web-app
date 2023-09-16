'use client'
import Booking from '@/components/Booking/Booking'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'


export default function Home() {
  return (
  
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='bg-white'>
          <Booking/>
        </div>
        <div className='bg-blue-200 col-span-2'>Map</div>
      </div>
   </div>
    
   
  )
}
