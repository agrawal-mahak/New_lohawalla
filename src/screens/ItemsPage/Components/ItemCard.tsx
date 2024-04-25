import item from "../../../assets/item.png"
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface ItemData {
  GSt?: {
    type?: string;
    value?: number;
  };
  companyName?: string;
  description?: string;
  images?: string[] | string;
  itemCode?: string;
  margin?: {
    cash?: number;
    online?: number;
  };
  priceField?: {
    name?: string;
    value?: number;
    operation?: string;
    type?: string;
    position?: number;
  }[];
  productName?: string;
  unit?: string;
  _id?:string;
  id?: string
  name?: string;
  type?: string;
  
}
const ItemCard: React.FC<{ data: ItemData }> = ({ data }) => {
  // console.log(data,"Hordt") 
    
  
    const navigate = useNavigate();

  return (
    <div className=' flex gap-[2rem] py-[15px] border-t border-b w-full '>
          <div onClick={() => navigate(`/singleproduct/${data._id}`, {state : { data}})} >
          <img  
      src={
        Array.isArray(data.images) && data.images.length > 0
          ? data.images[0]
          : typeof data.images === 'string'
          ? data.images
          : "https://m.media-amazon.com/images/I/51MLqxTajeL._SX679_.jpg"
      }
         alt='item' 
          className="w-[197px] h-[190px]" />
          </div>
       
         <div className='flex flex-col gap-[8px] '>
               <div className='font-[500] text-[18px] leading-[21px]'>{ data.name? data.name :data.productName}</div>
               {/* <div className='font-[500] text-[14px] leading-[17px] flex  items-center gap-[9px] '>
                <div className='font-[500] text-[18px] leading-[21px] text-[#B12704] '>₹64,500 /Ton</div>
               
                ₹71,999 Save ₹7,000 (13%)</div> */}
               <div className='text-[#565959] font-[400] text-[14px] leading-[16px] '>{data.description ? data.description : data.companyName}</div>
                 <div className="flex text-center text-[#007185] items-center  ">
               <div className="flex  pr-[12px] font-[400] text-[14px] leading-[16px] text-[]"><FaStar className="text-yellow-600" /> <FaStar className="text-yellow-600" /> <FaStar className="text-yellow-600" /> <FaStar className="text-yellow-600" /> <FaStarHalfStroke className="text-yellow-600" />  
               </div>  
                  <IoIosArrowDown className="text-black" />  1,084
               </div>
         </div>
    </div>
  )
}
 
export  default ItemCard