// import React from 'react'
// import slide1 from '../../assets/slide1.png'

// const Comp1 = () => {
//   return (
//     <div>   
//         <img src={slide1} alt='slide1'/>
//     </div>
//   )
// }

// export default Comp1



import { FaStar, FaRegStar } from "react-icons/fa";
import mobilebar from "../../../../assets/1stimage/mobilebar.png";
import circle from "../../../../assets/1stimage/circle.png";
import { BsFillHandbagFill } from "react-icons/bs";
import bigbar from "../../assets/bigbar.png"
import bigcircle from "../../assets/CIRCLE.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usePriceMutation, useSearchAllProductsMutation } from "../../Redux/Api/priceAPI";


interface CustomerData {
  GodownId: string;
  GodownName: string;
  createdAt: number;
  email: string;
  image: string;
  maxAge: number;
  name: string;
  phoneNumber: string;
  role: string;
  success: boolean;
  userId: string;
}

const Comp1 = () => {
  const [formData, setFormData] = useState<{
    itemsIds: string[];
  }>({
    itemsIds: [],
  });
  const [priceMutation, { data: PriceResponse,isLoading }] = usePriceMutation();
  const [searchAllProducts, { data: Results }] = useSearchAllProductsMutation();

  useEffect(() => {
    const searchTerm = "16 MM TMT BAR I INDOSTAR";
    searchAllProducts( searchTerm );
  }, []);
  
    const id = Results?.product[0].id

  // console.log("resukt",Results?.product[0].id)


  useEffect(() => {
    if (id) {
      setFormData({
        ...formData,
        itemsIds: [id],
      });
    }
  }, [id]); 

  useEffect(() => {
    if (formData.itemsIds.length > 0) {
      console.log(formData, "form");
      priceMutation(formData);
    }
  }, [formData, priceMutation]); // Dependency array ensures this useEffect runs only when `formData` or `priceMutation` changes

  console.log(PriceResponse, "price");

  const netValue =
    PriceResponse?.results[0]?.taxablePrice +
    0.18 * PriceResponse?.results[0]?.taxablePrice;

  const pre = 0.18 * PriceResponse?.results[0]?.taxablePrice;
  // console.log(netValue, "percentage");


   const unit = PriceResponse?.results[0]?.unit;
     console.log(unit,"unit")

  return (
 
    <>

         <div
      className="flex relative overflow-hidden sm:h-[18rem] md:h-[33rem] md:gap-[7rem] lg:gap-[8rem] xl:gap-[1rem]
           bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200"
      // style={{ background: "linear-gradient(180deg, #F5F9FC 80%, white )"}}
    >
      <div className="flex flex-col  ml-[0.7rem] my-[1.365rem] md:ml-[2.1rem] md:my-[2.365rem] lg:mx-[5.5rem] lg:my-[5.365rem] gap-[0.36rem]  md:gap-[2rem] pt-[2rem] ">
      <div className="font-[400] font-bebas-neue text-xl sm:text-[3rem] md:text-[6rem] lg:text-[4rem] leading-[3.6rem]">
           {Results?.product[0]?.name}
     </div>


        {/* center */}
        <div className="flex flex-row gap-[0.375rem] md:gap-[1.375rem]">
          {/* star half */}
          {/* <div className="flex flex-col gap-2">
            <div
              className="flex flex-row    lg:w-[9.5rem] h-[2rem] bg-yellow-400 justify-center items-center gap-0.5 md:gap-1 border rounded"
              style={{ backgroundColor: "rgba(255, 199, 0, 0.21)" }}
            >
              <div className="flex flex-row justify-evenly text-yellow-600 gap-1">
                <FaStar className="h-[0.66rem] w-[0.66rem] md:h-[1rem] md:w-[1rem]" />
                <FaStar className="h-[0.66rem] w-[0.66rem] md:h-[1rem] md:w-[1rem]" />
                <FaStar className="h-[0.66rem] w-[0.66rem] md:h-[1rem] md:w-[1rem]" />
              </div>
              <div className="flex flex-row justify-evenly gap-[2px] sm:gap-[5px]">
                <FaRegStar className="h-[0.66rem] w-[0.66rem] md:h-[1rem] md:w-[1rem]" />
                <FaRegStar className="h-[0.66rem] w-[0.66rem]  md:h-[1rem] md:w-[1rem]" />
              </div>
            </div>

            <div className="flex flex-row-reverse">
              <div className="text-[0.525rem] md:text-[0.875rem] font-[500] leading-[0.625rem] md:leading-[1.225rem] text-[#2A333E]">
                3 STAR RATING
              </div>
            </div>
          </div> */}
 
          {/* line  */}
          {/* <div className="border border-black h-full"></div> */}

          {/* weight half */}
          <div className="flex flex-col justify-center gap-0.5 md:w-[13rem]">
            <div className="font-[500] text-[0.78rem] md:text-[1.21rem]  leading-[1.0rem] md:leading-[1.80rem]  text-gray-700  items-center w-full">
              {isLoading? 
              (<div>
                 ...
              </div>) :(
               netValue && unit ? (`₹${netValue}/${unit}`) : ""
              )}
           
            </div>
            <div className="font-[500] text-[0.68rem] md:text-[1.11rem]  leading-[0.9rem] md:leading-[1.80rem]   text-[#9797AA]  items-center">
              {/* ₹55,976.950/Ton */}
            </div>
          </div>
        </div>
        {/* center */}

        {/* <div className="w-[17.5rem] h-[3.375rem] border-[0.22rem] rounded-[0.25rem] flex flex-row justify-center items-center gap-[0.625rem] mt-[0.875rem]">
          <BsFillHandbagFill />
          <span>ADD TO CART</span>
        </div> */}
      </div>

      {/* 2nd div */}
      <div className=" w-full relative ">
        <div className=" hidden lg:flex  flex-col justify-center gap-4 items-center border-[0.125rem] rounded-[0.750rem] w-[10rem] h-[4rem] md:w-[20rem] md:h-[6rem] mt-[3rem] ml-[1.375rem] ">
          <span className=" hidden md:flex font-[500] text-[1.375rem] leading-[1rem]">
            Available in{" "}
          </span>
          <span className="font-[500] text-[1.375rem] leading-[1rem]">
            8mm/12mm/14mm
          </span>
        </div>
 

        <div className="hidden lg:flex absolute top-[12.72rem] left-[19.6rem] z-20  h-[0.07rem] bg-gray-400 w-[11.1rem] transform rotate-45"></div>

        <div className="absolute  top-[2rem]  left-[0.21rem] sm:left-[2rem] md:top-[4rem]  md:left-[2rem] lg:top-[5rem]  lg:left-[16rem] w-[15rem] md:w-[25rem]  lg:w-[25rem] h-full sm:h-[21rem] lg:h-[70rem]">
          <div className="relative  lg:mt-10 z-0 ">
            <img
              src={bigbar}
              className="absolute top-2 right-16 z-10 w-[5.78rem] md:w-[14rem]"
              // style={{ marginTop: "-110px" }}
              alt=""
            />
            
            <img
              src={bigcircle}
              className="w-[11rem] md:w-[21rem] lg:w-[25rem] absolute top-0 right-5 md:top-14 md:right-0  "
              // style={{ marginTop: "-45px" }}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" hidden md:flex absolute  inset-0 w-full h-full bg-gradient-to-t from-white via-transparent "></div>
         </div>
    </>
  )
}
 
 
export default Comp1;