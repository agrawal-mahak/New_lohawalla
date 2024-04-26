import React from "react";
import Table from "./Table";

import indostar from "../../../assets/Indostar.png";

const tableData = [
  { data: "Manufacturer", values: "Indostar" },
  { data: "Size", values: "8 mm" },
  { data: "Height", values: "2533 inch" },
  { data: "Material", values: "Fe, hss" },
  { data: "Weight", values: "256 Kg" },
  { data: "Thickness", values: "253 inch" },
];

export interface ItemDataProps {
  productName?: string;
  name?: string;
  mrpPrice?: number;
  status?: string;
  description?: string;
  image?: string;
  _id?: string;
  data?: any; // Adjust the type according to the shape of your data
  isLoading?: boolean;
}

  


const ItemData: React.FC<ItemDataProps> = ({ productName, name, mrpPrice, status, description, image, _id, data, isLoading }) => {
     console.log(data,"productname")
     console.log(description,name,productName,mrpPrice,status,image,_id,"all of the above")

     const getProductName = (productName?: string, dataProductName?: string): string | undefined => {
      return productName ?? dataProductName;
    };

  return (
    <div className="px-[80px]">
      {/* table */}
      <div className="flex flex-col gap-[48px]">
        <div className="flex flex-col justify-between gap-[12px]  ">
          <div>
            <img src={indostar} />
          </div>
          <div className="flex justify-between ">
            <div className="font-[500] text-[30px] leading-[36px]">
            {name ? name : (data ? (data.productName ? data.productName : data.name) : "")}

            </div>

            <div className="w-[163px] h-[40px] border rounded-[4px] flex justify-center items-center bg-[#FEBD69] font-[700] text-[16px] leading-[20px] ">
              Get Latest Price
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[17px]">
          <div className="px-[20px] py-[24px] border">
            <div className="font-[600] text-[24px] leading-[32px]">
              Rs  {mrpPrice}
            </div>
            <div className="font-[500] text-[14px] leading-[19px] del text-[#5C5C77]">
              MRP{" "}
              <span style={{ textDecoration: "line-through" }}>
                ₹57,000.078
              </span>{" "}
              <span className="text-[#007600]">(-3% off)</span>
            </div>
          </div>
          <div>
            <h1 className="font-inter text-[16px] text-black mt-6 mb-4">
              Specifications
            </h1>
            <Table data={tableData} />
          </div>

          <div className="mt-8 flex justify-center">
            <button
              className="bg-[#FEBD69] text-black font-bold py-3 px-[17.3rem] whitespace-nowrap rounded
             hover:bg-white hover:text-[#1E293B] hover:border-2 hover:border-[#1E293B] hover:transition hover:duration-500"
            >
              Get Best Price
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemData;
