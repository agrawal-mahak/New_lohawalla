import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useAllCategoriesQuery } from "../../Redux/Api/Category";
import { useSearchAllProductsMutation } from "../../Redux/Api/priceAPI";
import { SearchResult } from "../../types/types";
 
const Header = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useAllCategoriesQuery("");

 
  return (

    <div className="bg-white flex p-3 items-center gap-6 font-inter text-[#252F3D] font-semibold  text-sm top-[5.4rem] sticky z-30 border">
      <div className="ml-12 flex  items-center gap-6 font-inter text-[#252F3D] font-semibold text-sm cursor-pointer">

        <RxHamburgerMenu />
        {data?.slice(10, 16).map((item: any, index: any) => (
          <p key={index} onClick={() => navigate("/items", {state : { name : item.name}})}>
             {item.name} 
          </p>
        ))}
 
        <div className="text-blue-600" onClick={() => navigate("/items", {state: {name: null}}) }>ITEMS</div>
      </div>
    </div>
  );
};       
 
export default Header;