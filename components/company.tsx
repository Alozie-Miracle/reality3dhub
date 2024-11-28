import Image from 'next/image'
import React from 'react'

type Props = {}

import image from '@/assets/image.jpg'

const Company = (props: Props) => {
  return (
    <div className=' bg-gray-100 flex flex-col items-center justify-center lg:flex-row gap-5 lg:px-3 py-5 lg:py-10'>
        <div className='px-3 py-10 flex flex-col gap-3'>
            <h2 className='font-semibold text-center lg:text-start'>You're in realy good company</h2>
            <p className='text-sm text-center lg:text-start text-gray-500 lg:max-w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, exercitationem voluptates cupiditate sint quasi magnam provident perferendis iusto, laborum totam dicta cumque animi distinctio omnis, aut quia nisi soluta. Unde?</p>
        </div>
        
        <div className='h-1/2 lg:h-[400px] w-full relative'>
            <Image src={image} alt='build' className='w-full h-full lg:rounded-xl object-cover' />
            <div className='absolute z-10 text-white bottom-10 left-5 flex flex-col gap-3'>
                <h2 className='text-2xl font-bold'>Want to make your <br /> 3D Customize Product?</h2>
                <button className='bg-white p-3 px-10 rounded-full text-black w-fit'>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default Company