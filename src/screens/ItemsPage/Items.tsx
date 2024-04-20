import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import ItemCard from "./Components/ItemCard";
import { IoIosArrowDown } from "react-icons/io";
import Footer from "../Footer/Footer";

const Items = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="flex justify-between px-[22px] py-[12px]">
        <span>1-16 of over 2,000 results for TMT</span>
        <div className="bg-slate-200 flex justify-center items-center border rounded-lg w-[130px] h-[34px]">
          Sort By
        </div>
      </div>

      <div className=" flex  h-full gap-[2rem] px-[2rem]">
        <div className=" w-[250px]  h-[70%] pl-[30px] flex flex-col gap-[0.6rem] border-r">
          <div className="flex flex-col gap-[0.6rem] ">
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
               <div className="font-[500] text-[14px] leading-[16px]">
               <input type="checkbox" id="myCheckbox" name="myCheckbox" />
                AC Patti
              </div>
              <div className="font-[500] text-[14px] leading-[16px]">
              <input type="checkbox" id="myCheckbox" name="myCheckbox" />
                Baby Coil
              </div>
              <div className="font-[500] text-[14px] leading-[16px]">
              <input type="checkbox" id="myCheckbox" name="myCheckbox" />
                AC Sheet
              </div>
               </div>

               <div className="flex items-center gap-[3px]">
              <IoIosArrowDown />
              <div className="text-[#007185] font-[500] text-[14px] leading-[16px]">
                See More 
              </div>
            </div>

          </div>



        </div>

        <div>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Items;
