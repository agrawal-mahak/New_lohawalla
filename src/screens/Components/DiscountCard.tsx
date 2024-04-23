import React from 'react'
import rod from '../../assets/rod.png'
import { Link } from 'react-router-dom'

const DiscountCard = () => {
  return (
    <div className='  p-5 mt-2 bg-[#FFFFFF] z-20'> 
        <h1 className='font-inter font-extrabold text-[1.1rem]'>Up to 05% off | Iron</h1>
        <img src={rod} className="w-[19.5rem] mt-4"/>
        <Link to=''> 
           <p className='text-[#007185] font-inter font-semibold mt-10'>See more</p>
        </Link>
    </div>
  )
}

export default DiscountCard