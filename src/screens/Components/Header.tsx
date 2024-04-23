import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { useAllCategoriesQuery } from '../../Redux/Api/Category';

const Header = () => {
  const navigate = useNavigate()
  const { data, isLoading } = useAllCategoriesQuery("");
   console.log(data, 'header')

  return (
    <div className='bg-[#FFFFFF] flex p-3 items-center gap-6 font-inter text-[#252F3D] font-semibold text-sm'>
         <div className='ml-12 flex  items-center gap-6 font-inter text-[#252F3D] font-semibold text-sm'>
            <RxHamburgerMenu/>
            {data?.slice(10,22).map((item:any, index:any) => (
              <p key={index} onClick={() => navigate('/singleproduct')}>{item.name}</p>
            ))}


            {/* <p>All</p>
            <p>Tmt Bar</p>
            <p>Cement</p>
            <p>GI Sheets</p>
            <p>Roof Tops</p>
            <p>Cement Brick</p>
            <p>Stainless Steel Sink</p>
            <p>Iron L Angle</p>
            <p>Iron L Angle</p> */}
             
         </div>
    </div>
  )
}

export default Header