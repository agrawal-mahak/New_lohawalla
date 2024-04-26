import React from "react";

const ProductDetails = () => {
  return (
    <div>
      <div className="font-[700] text-[18px] leading-[27px]">
        Product Details
      </div>

      <div className="flex gap-[17px]"> 
      <div className="flex flex-col font-[600] text-[16px] leading-[24px] ">
        <div>Diameter</div>
        <div>Item Code</div>
        <div>Use Case</div>
        <div>Grade</div>
        <div>Production Capacity</div>
        <div>Manufacturing Material </div>
      </div>


      <div className="flex flex-col font-[400] text-[16px] leading-[24px]">
        <div>16mm</div>
        <div>5678</div>
        <div>Build rcc Structure</div>
        <div>Fe-550d</div>
        <div>1 million metric Tons per Annum</div>
        <div>Sponge iron</div>
      </div>
      </div> 


    </div>
  );
};

export default ProductDetails;
