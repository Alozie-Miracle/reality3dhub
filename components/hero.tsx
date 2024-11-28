import React from 'react'
import Navbar from './navbar'
import Image from 'next/image'
import bg from '@/assets/image (6).jpeg'
type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='relative flex flex-col justify-between h-[60vh] lg:h-screen'>
      <Navbar />
      <Image src={bg} alt="bg" className="h-[60vh] lg:h-screen w-full object-cover absolute top-0 z-20" />

      <div className='h-[30vh] flex flex-col items-center justify-center gap-5 relative z-30 text-white bottom-0 pb-20'>
        <p className='font-semibold text-xs'>Your dream, Our Technology</p>
        <h2 className='text-center text-2xl font-bold'>Unlock the Future of <br /> Manufacturing with 3D Printing</h2>
        <button className='w-[200px] bg-white text-black rounded-full text-xs py-2'>Get Started</button>
      </div>
    </div> 
  )
}

export default Hero