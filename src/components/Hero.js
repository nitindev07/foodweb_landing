import React from 'react'
import Burger from '../assets/pexels-valeria-boltneva-1639562.jpg'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='relative max-h-[500px]'>
        <div  className='absolute w-full h-full text-gray-200 flex flex-col justify-center bg-black/40'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold'>The <span className='text-orange-500'>Best</span></h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold'><span className='text-orange-500'>Food</span> Delivered</h1>
        </div>
        <img src={Burger} alt="pic of burger" className='w-full max-h-[500px] object-cover' />
      </div>
    </div>
  )
}

export default Hero
