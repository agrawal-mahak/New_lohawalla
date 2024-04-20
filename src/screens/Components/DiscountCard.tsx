import React from 'react'
import rod from '../../assets/rod.png'

const DiscountCard = () => {
  return (
    <div className='border border-gray-800 p-5 mt-2'> 
        <h1 className='font-inter font-extrabold text-[1.1rem]'>Up to 05% off | Iron</h1>
        <img src={rod} className="w-[19.5rem] mt-4"/>
        <p className='text-[#007185] font-inter font-semibold mt-10'>See more</p>
    </div>
  )
}

export default DiscountCard