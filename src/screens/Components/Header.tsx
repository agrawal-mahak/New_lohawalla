import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className='bg-[#FFFFFF] flex ml-20 mt-2 items-center gap-6 font-inter text-[#252F3D] font-semibold text-sm'>
        <RxHamburgerMenu/>
        <p>All</p>
        <p>Tmt Bar</p>
        <p>Cement</p>
        <p>GI Sheets</p>
        <p>Roof Tops</p>
        <p>Cement Brick</p>
        <p>Stainless Steel Sink</p>
        <p>Iron L Angle</p>
        <p>Iron L Angle</p>
        <p></p>
    </div>
  )
}

export default Header