import React from 'react'
import logo from '../../assets/logo.png'
import Dropdown from './Dropdown'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
     <div className='flex flex-row justify-around items-center bg-[#5097A4] p-2 '>
        <div className='bg-[#5097A4]' onClick={() => navigate("/")}>
        <img src={logo} alt='logo'/>
        </div>

        <div className='bg-white'>
            <Dropdown/>
        </div>

        <button className='text-[#0F172A] text-sm rounded-md font-inter font-semibold bg-[#FEBD69] px-11 py-3'>
            Contact For Better Pricing
        </button>
     </div>
  )
}

export default Navbar