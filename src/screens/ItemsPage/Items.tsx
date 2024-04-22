import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import ItemCard from "./Components/ItemCard";
import { IoIosArrowDown } from "react-icons/io";
import Footer from "../Footer/Footer";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import RelatedSearch from "./Components/RelatedSearch";

const Items = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="flex justify-between px-[18px] py-[12px] border-b shadow-lg">
        <span>1-16 of over 2,000 results for TMT</span>
        <div className="bg-slate-200 flex justify-center gap-[7px] items-center shadow-lg border rounded-lg w-[130px] h-[34px]">
          

          <select className="bg-slate-200 border rounded-lg h-full w-full shadow-md">
            <option value="">Sort By <IoIosArrowDown /></option>
            <option value="company1">Company 1</option>
            <option value="company2">Company 2</option>
            {/* Add more companies here */}
        </select>
        </div>
      </div>

      <div className=" flex  h-full gap-[2rem] px-[1.67rem]">
        <div className=" w-[270px]  h-[500px] pl-[30px] flex flex-col gap-[0.6rem] border-r-[2px]">
          <div className="flex flex-col gap-[0.6rem]  mt-[16px]">
            <div className="font-[700] text-[14px] leading-[16px] ">
              Category
            </div>

            <div className="pl-[12px] flex flex-col gap-[4px]">
              <div className="font-[500] text-[14px] leading-[16px]">
                AC Sheet
              </div>
              <div className="font-[500] text-[14px] leading-[16px]">
                AC Patti
              </div>
              <div className="font-[500] text-[14px] leading-[16px]">
                Baby Coil
              </div>
              <div className="font-[500] text-[14px] leading-[16px]">
                AC Sheet
              </div>
            </div>

            <div className="flex items-center gap-[3px]">
              <IoIosArrowDown />
              <div className="text-[#007185] font-[500] text-[14px] leading-[16px]">
                See all two department
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[0.6rem]">
            <div className="font-[700] text-[14px] leading-[16px] ">
              Brand
            </div>
             
               <div className="pl-[8px]">
               <div className="font-[500] text-[14px] leading-[16px] flex items-center gap-[5px]">
               <input type="checkbox" id="myCheckbox" name="myCheckbox" />
                AC Patti
              </div>
              <div className="font-[500] text-[14px] leading-[16px] flex items-center gap-[5px]">
              <input type="checkbox" id="myCheckbox" name="myCheckbox" />
                Baby Coil
              </div>
              <div className="font-[500] text-[14px] leding-[17px] flex items-center gap-[5px]">
              <input type="checkbox" id="myCheckbox" name="myCheckbox" />
                AC Sheet.
              </div>
               </div>

               <div className="flex items-center gap-[3px]">
              <IoIosArrowDown />
              <div className="text-[#007185] font-[500] text-[14px] leading-[16px]">
                See More 
              </div>
            </div>

          </div>

       <div className="flex gap-[6px]">
            <div className="w-[65px] h-[31px] border rounded-[4px] flex justify-center items-center ">
            ₹Min
            </div>
            <div className="w-[65px] h-[31px] border rounded-[4px] flex justify-center items-center ">
            ₹Max
              </div>
              <div className="w-[41px] h-[30px] border rounded-[8px] flex justify-center items-center ">
            Go
              </div>
       </div>


        </div>
          
          <div className="flex flex-col gap-[1rem]">
        <div className="w-full">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />

        </div>
        <div>
             <RelatedSearch />
         </div>
         </div>
      </div>

        


        <div className="h-[96px] flex justify-center items-center  ">
             
               <div className="flex flex justify-center items-center border  gap-[19px]  h-[48px]">
              <FaAngleLeft />
              <span>
                Previous
              </span>
              <span className="flex gap-[2.2rem]">
                1 2 3 4 ... 98
              </span>
              <span>
                Next
              </span>
               <FaAngleRight />
               </div>
        </div>

      <Footer />
    </div>
  );
};

export default Items;
