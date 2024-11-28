import { Bars3Icon } from '@heroicons/react/16/solid'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div>
      <div className='hidden relative top-0 z-50 bg-transparent lg:flex items-center justify-center gap-10 text-white p-5 text-xs'>
        <p>Home</p>
        <p>Service</p>
        <p>Project</p>
        <p className='text-xl font-bold'>Reality3DHub</p>
        <p>About Us</p>
        <p>Contact</p>
      </div>

      <div className='lg:hidden relative top-0 z-50 bg-transparent flex items-center justify-between gap-10 text-white p-5 px-3 text-xs'>
        <p className='cursor-pointer'>Reality3DHub</p>
        <Bars3Icon className='h-5 w-5 text-white cursor-pointer' />
      </div>
    </div>
  )
}

export default Navbar