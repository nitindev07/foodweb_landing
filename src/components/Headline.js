import React from 'react'

const Headline = () => {
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-16 sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
    {/* card */}
      <div className='relative rounded-xl my-4'>
        <div className='absolute rounded-xl text-white bg-black/40 w-full h-full  '>
            <p className='text-md sm:text-2xl md:text-2xl lg:text-3xl font-semibold sm:font-bold md:px-4 px-2 pt-4'>Sun's Out, BOGO's Out</p>
            <p className='px-2 md:px-4 text-sm sm:text-base md:text-lg  md:py-1 lg:py-2'>Through 8/26</p>
            <button className='bg-white cursor-pointer text-black absolute rounded-xl px-5 py-1 mx-2 md:mx-4 bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] rounded-xl w-full object-cover' src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib+rb" alt="" />
      </div>
      <div className='relative rounded-xl my-4'>
        <div className='absolute rounded-xl text-white bg-black/40 w-full h-full  '>
            <p className='text-md sm:text-2xl md:text-2xl lg:text-3xl font-semibold sm:font-bold md:px-4 px-2 pt-4'>New Resturant</p>
            <p className='px-2 md:px-4 text-sm sm:text-base md:text-lg  md:py-1 lg:py-2'>Added Daily</p>
            <button className='bg-white cursor-pointer text-black absolute rounded-xl px-5 py-1 mx-2 md:mx-4 bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] rounded-xl w-full object-cover' src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib" alt="" />
      </div>
      <div className='relative rounded-xl my-4'>
        <div className='absolute rounded-xl text-white bg-black/40 w-full h-full  '>
            <p className='text-md sm:text-2xl md:text-2xl lg:text-3xl font-semibold sm:font-bold md:px-4 px-2 pt-4'>We Deliver Desserts Too</p>
            <p className='px-2 md:px-4 text-sm sm:text-base md:text-lg  md:py-1 lg:py-2'>Tasty Treats</p>
            <button className='bg-white cursor-pointer text-black absolute rounded-xl px-5 py-1 mx-2 md:mx-4 bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] rounded-xl w-full object-cover' src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib" alt="" />
      </div>
    </div>
  )
}

export default Headline
