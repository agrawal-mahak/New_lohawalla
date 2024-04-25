import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'
import { SearchResult } from '../../types/types'
import { useSearchAllProductsMutation } from '../../Redux/Api/priceAPI'


const Navbar = () => {
 

  return (
     <div className='flex flex-row justify-around items-center bg-[#5097A4] p-2 top-0 sticky z-30'>
        <div className='bg-[#5097A4]'>
        <Link to='/'> <img src={logo} alt='logo'/></Link>
        </div>

        <div className='bg-white'>
            <Dropdown/>             
        </div>

         <Link to='/Contact'>
         <button       
             // onClick={() => handleaddToCart(_id)}
                className='bg-[#FEBD69] font-inter font-bold whitespace-nowrap md:mb-3 mb:-2 rounded-lg md:py-4 py-2 md:px-[3rem] px-2 my-2 md:text-sm text-[12px] text-[#0F172A]
                            hover:bg-white hover:text-[#0F172A] hover:border-2 hover:border-[#1E293B] hover:transition hover:duration-500'>  
               Contact for better Pricing 
         </button>
         </Link>    
     </div>
  )
}

export default Navbar