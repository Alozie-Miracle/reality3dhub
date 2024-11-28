import Image from 'next/image'
import React from 'react'

type Props = {}

import image from '@/assets/image (6).jpeg'
import image2 from '@/assets/image (5).jpeg'

const Mission = (props: Props) => {
  return (
    <div className='bg-black text-white p-3 lg:p-5 py-10'>
        <div className='lg:max-w-[90%] w-full mx-auto flex flex-col gap-10'>
            <div className='flex flex-col gap-5 lg:flex-row items-center w-full lg:py-10'>
                <div className='w-full flex flex-col gap-3'>
                    <p className='text-xs'>Company's Mission</p>
                    <p className='font-semibold text-base flex-1'>Our mission is to revolutionalize manufacturing through state-of-art 3D printing technology.</p>
                </div>
                <Image src={image} alt='image' className=' h-[300px] w-full rounded-xl object-cover' />
            </div>
            <div className='flex flex-col gap-5 lg:flex-row-reverse items-center w-full lg:py-10'>
                <div className='w-full flex flex-col gap-3'>
                    <p className='text-xs'>Why Choose Us</p>
                    <p className='font-semibold text-base flex-1'>We take one more step ahead than other company, we always keep technology, and commmitment to quality in first place.</p>
                </div>
                <Image src={image2} alt='image' className=' h-[300px] w-full rounded-xl object-cover' />
            </div>
        </div>
    </div>
  )
}

export default Mission