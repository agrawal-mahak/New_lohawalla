import { IoArrowForward } from "react-icons/io5";
import circle from "../../../assets/searchcircle.png";
import  tin from "../../../assets/tin.png";
import cementbar from "../../../assets/cementbar.png";
import tmt from "../../../assets/3tmt.png"


 const RelatedItem = () => {
  return (
    <div className="flex flex-col gap-[48px] pb-[12px]">
          <div className='flex  justify-between '>
          <div className="flex items-center font-[600] text-[24px] leading-[32px]">
               Related Item 
           </div>

             <div className="flex items-center justify-center font-[600] text-[16px] leading-[24px] text-[#007185] gap-[4px]">
              Shop the Collection 
              <IoArrowForward  />
             </div>

          </div>

          <div className="flex justify-between">
          <div className="w-[294px] h-[242px] border rounded-[8px] flex justify-center items-center">
            <div className="w-[270px] h-[218px] bg-slate-200 flex justify-center  items-center">
                <img src={tin} />
            </div>

          </div>

          <div className="w-[294px] h-[242px] border rounded-[8px] flex justify-center items-center">
          <div className="w-[270px] h-[218px] bg-slate-200 flex justify-center  items-center">
          <img src={circle} />
            </div>

          </div>

          <div className="w-[294px] h-[242px] border rounded-[8px] flex justify-center items-center">
          <div className="w-[270px] h-[218px] bg-slate-200 flex justify-center  items-center">
          <img src={tmt} />
            </div>

          </div>

          <div className="w-[294px] h-[242px] border rounded-[8px] flex justify-center items-center">
          <div className="w-[270px] h-[218px] bg-slate-200 flex justify-center  items-center">
          <img src={cementbar} />
            </div>

          </div>


          </div>
    </div>
  )
}

export  default RelatedItem