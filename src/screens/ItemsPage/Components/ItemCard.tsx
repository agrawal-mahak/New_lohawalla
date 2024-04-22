
import item from "../../../assets/item.png"
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const ItemCard = () => {
  return (
    <div className=' flex gap-[2rem] py-[18px] border-t border-b w-full '>
          <div>
          <img src={item} alt='item' />
          </div>
       
         <div className='flex flex-col gap-[8px] '>
               <div className='font-[500] text-[18px] leading-[21px]'>Essar CR Sheet</div>
               <div className='font-[500] text-[14px] leading-[17px] flex  items-center gap-[9px] '>
                <div className='font-[500] text-[18px] leading-[21px] text-[#B12704] '>₹64,500 /Ton</div>
                
                ₹71,999 Save ₹7,000 (13%)</div>
               <div className='text-[#565959] font-[400] text-[14px] leading-[16px] '>This item will be released on September 10, 2021.</div>
                 <div className="flex text-center text-[#007185] items-center  ">
               <div className="flex  pr-[12px] font-[400] text-[14px] leading-[16px] text-[]"><FaStar className="text-yellow-600" /> <FaStar className="text-yellow-600" /> <FaStar className="text-yellow-600" /> <FaStar className="text-yellow-600" /> <FaStarHalfStroke className="text-yellow-600" />  
               </div>  
                  <IoIosArrowDown className="text-black" />  1,084
               </div>
         </div>
    </div>
  )
}

export  default ItemCard;