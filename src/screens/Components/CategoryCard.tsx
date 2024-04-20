import React from 'react'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import ImgCard from './ImgCard'

const CategoryCard = () => {
  return (
    <div className='bg-[#FFFFFF] p-5 border border-gray-400 mt-2'> 
        <h1 className='font-inter font-bold text-md pb-2'>Top Category for you</h1>
        <div className='flex flex-col gap-4'>
             <div className='flex gap-4'>
                <ImgCard/>
                <ImgCard/>
             </div>

            <div className='flex gap-4'>
                <ImgCard/>
                <ImgCard/>     
            </div>
        </div>
    </div>
  )
}

export default CategoryCard