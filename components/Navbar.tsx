import React from 'react'
import navbarlogo from '../components/public/navbar-logo.png'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

/**
 * 
 * @returns the react component of the Navigation bar for the UI
 */
const Navbar = () => {
  return (
    <div className='flex gap-10 justify-between p-3 px-9 border-b-[2px] shadow-sm'>
        <div className='flex items-center gap-10'>
            <Image src={navbarlogo}
            alt = 'logo'
            width={80}
            height={40}
            />
            <div className='hidden md:flex gap-6 justify-between'>
                <h2 className='hover:bg-purple-400 rounded-md p-2 cursor-pointer transition-all'>Home</h2>
                <h2 className='hover:bg-purple-400 cursor-pointer transition-all rounded-md p-2'>History</h2>
                <h2 className='hover:bg-purple-400 cursor-pointer transition-all rounded-md p-2'>Support</h2> 
            </div>
        </div>
        <div className='items-center'>
        <UserButton afterSignOutUrl='/' />
        </div>
        

    </div>

  )
}

export default Navbar
