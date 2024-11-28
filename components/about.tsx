import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='h-[40vh] lg:h-[50vh] flex flex-col items-center justify-center gap-5 p-3 lg:p-5 bg-gray-100'>
      <h3 className='text-xl font-bold text-center'>Welcome to Reality3DHub <br className='hidden lg:flex' /> Your Partner in 3D Printing Excellence.</h3>
      <p className='text-gray-500 text-center text-sm'>At Reality3DHub, we're pioneers in 3D printing technology, offering innovative solutoions for businesses <br className='hidden lg:flex' /> individuals alike. Our cutting-edge 3D printing services bring your ideas to life and transform your <br className='hidden lg:flex' /> concepts into reality.</p>
    </div>
  )
}

export default About