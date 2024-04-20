import React from 'react'
import image1 from '../../assets/image1.png';

const imgCard = () => {
  return (
    <div>
         <div className='bg-[#F6FAFB] w-[150px] justify-center flex flex-col'>
                    <img src={image1} className='w-20 mx-auto'/>
                    <h1 className='mx-auto'>GI Pipe</h1>
         </div>
    </div>
  )
}

export default imgCard