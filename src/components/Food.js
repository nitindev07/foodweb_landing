import React, { useState } from 'react'
import {data} from '../data/data.js'
import {categories} from '../data/data.js'

const Food = () => {
    const [food,setfood]=useState(data)
    const FilterType=(category)=>{
        setfood(
            data.filter((item)=>{
                return item.category === category;
            })
        )
    }
    const Filterprice=(price)=>{
        setfood(
            data.filter((item)=>{
                return item.price === price;
            })
        )
    }
  return (
    <div className='max-w-[1640] mx-auto px-4'>
      <div>
        <h1 className='text-center text-orange-600 font-bold text-4xl my-6'>Top Rated Menu Items</h1>
        {/* filter */}
        <div className='md:flex justify-between'>
            {/* filtertype */}
            <div>
                <p className='font-bold'>Filter Type</p>
                <button onClick={()=>setfood(data)} className='border-orange-600 text-orange-600 border-2 rounded-3xl px-3 py-1 hover:bg-orange-600 hover:text-white m-2 '>All</button>
                <button onClick={()=>FilterType('burger')} className='border-orange-600 text-orange-600 border-2 rounded-3xl px-3 py-1 hover:bg-orange-600 hover:text-white m-2 '>Burger</button>
                <button onClick={()=>FilterType('pizza')} className='border-orange-600 text-orange-600 border-2 rounded-3xl px-3 py-1 hover:bg-orange-600 hover:text-white m-2 '>Pizza</button>
                <button onClick={()=>FilterType('salad')} className='border-orange-600 text-orange-600 border-2 rounded-3xl px-3 py-1 hover:bg-orange-600 hover:text-white m-2 '>Salad</button>
                <button onClick={()=>FilterType('chicken')} className='border-orange-600 text-orange-600 border-2 rounded-3xl px-3 py-1 hover:bg-orange-600 hover:text-white m-2 '>Chicken</button>
            </div>
            {/* filterprice */}
            <div>
                <p className='font-bold'>Filter Type</p>
                <button onClick={()=>Filterprice('$2')} className='border-orange-600 text-orange-600 border-2 rounded-3xl px-3 py-1 hover:bg-orange-600 hover:text-white m-2'>$2</button>
                <button onClick={()=>Filterprice('$5')} className='border-orange-600 text-orange-600 border-2 rounded-3xl px-3 py-1 hover:bg-orange-600 hover:text-white m-2 '>$5</button>
                <button onClick={()=>Filterprice('$10')} className='border-orange-600 text-orange-600 border-2 rounded-3xl px-3 py-1 hover:bg-orange-600 hover:text-white m-2 '>$10</button>
                <button onClick={()=>Filterprice('$100')} className='border-orange-600 text-orange-600 border-2 rounded-3xl px-3 py-1 hover:bg-orange-600 hover:text-white m-2 '>$100</button>
            </div>
        </div>
      </div>
      {/* fooditems */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-16'>
        {food.map((item,index)=>(
            <div key={index} className='rounded-xl shadow-lg hover:scale-110 duration-300'>
                <img className='h-[200px] rounded-t-xl object-cover w-full' src={item.image} alt={item.name} />
                <div className='flex justify-between items-center m-2'>
                    <p className=' py-2 font-bold'>{item.name}</p>
                    <p ><span className='bg-orange-600 text-white px-3 py-1 text-sm rounded-full'ss>{item.price}</span></p>
                </div>
            </div>
        ))}
      </div>
      <h1 className='text-center text-orange-600 font-bold text-4xl my-6'>Top Favourite Categories</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8 py-16'>
        {categories.map((items, id)=>(
            <div key={id} className='cursor-pointer flex w-full items-center justify-between md:justify-around bg-gray-200 rounded-lg shadow-lg hover:scale-110 duration-300'>
                 <p className='ml-4 font-bold'>{items.name}</p>
                 <img src={items.image} alt={items.name} className='h-[90px] md:h-[120px]' />
                

            </div>
        ))}
      </div>
    </div>
  )
}

export default Food
