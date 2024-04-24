import React from 'react'
import { Link } from 'react-router-dom'

const ShopWithUs = () => {
  return (
    <div className='bg-[#FFFFFF] px-4 py-2 h-[8rem] mt-2 w-[22rem] z-20'>
        <h1 className='font-inter font-bold text-lg'>
            Shop with Us
        </h1>
        <p className='text-[0.850rem] font-semibold mt-3 font-inter'>
            Fast, convenient and secure | Over 17 crore products in your pocket
        </p>
         <Link to=''>
            <p className='font-inter text-sm text-[#007185] font-bold mt-3'>
                Download our Catalog
            </p>
         </Link>
    </div>
  )
}

export default ShopWithUs