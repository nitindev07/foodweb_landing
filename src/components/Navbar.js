import React from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag} from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'
import { useState } from 'react'

const Navbar = () => {
  const [nav,setNav]=useState(false)


  return (
    <>
    <div className='max-w-[1640px] flex justify-between mx-auto p-4 items-center'>
      <div className='flex items-center'>
        <div><AiOutlineMenu onClick={()=>setNav(!nav)} size={30} className='cursor-pointer'/></div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Best <span className='font-bold'>Eats</span></h1>
        <div className='hidden lg:flex items-center bg-gray-200 p-1 rounded-full'>
          <div className='bg-black text-white p-2 rounded-full'>Delivery</div>
          <div className='pl-1'>Pickup</div>
        </div>
      </div>
      
        <div className='flex items-center bg-gray-200 rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
          <AiOutlineSearch size={25}/>
          <input type="text" placeholder='Search Foods' className='bg-transparent w-full p-2' />
        </div>
        <button className='items-center bg-black hidden md:flex text-white px-4 rounded-full py-2 '>
          <BsFillCartFill size={20}/>
          Cart
        </button>
    </div>
    {/* // menumobile */}
    {nav ? <div className=" fixed top-0 left-0 bg-black/80 w-full z-10 h-screen"></div>: " " }
    
      <div className={`w-[360px] z-10 top-0 fixed bg-white h-screen px-4 ease-in-out duration-300 ${nav ? 'left-[0%]':'-left-[100%]'}`}>
        <div className='flex justify-between items-center py-5'>
          <h1 className='text-3xl'>Best <span className='font-bold'>Eats</span></h1>
          <AiOutlineClose size={25} className='cursor-pointer' onClick={()=>setNav(!nav)}/>
        </div>
        <ul>
          <li className='flex items-center text-xl py-4 gap-2'><TbTruckDelivery/>Orders</li>
          <li className='flex items-center text-xl py-4 gap-2'><MdFavorite/>Favourite</li>
          <li className='flex items-center text-xl py-4 gap-2'><FaWallet/>Wallet</li>
          <li className='flex items-center text-xl py-4 gap-2'><MdHelp/>Help</li>
          <li className='flex items-center text-xl py-4 gap-2'><AiFillTag/>Promotions</li>
          <li className='flex items-center text-xl py-4 gap-2'><BsFillSaveFill/>Best Ones</li>
          <li className='flex items-center text-xl py-4 gap-2'><FaUserFriends/>Invite Friends</li>
        </ul>
      </div>
    
    </>
  )
}

export default Navbar
