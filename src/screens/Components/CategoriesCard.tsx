import { useEffect, useState } from "react";
import mobilebar from "../../assets/mobilebar.png";
import { Categories, SearchResult } from "../../types/types";
import { Link, useNavigate } from "react-router-dom";

 interface Category {
  id: string ;
  name: string;
  type: string;
}
 
interface CategoriesCardProps {
  searchResult: Category; // Update type to SearchResult
}


const CategoriesCard = (props: CategoriesCardProps) => {
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
   const navigate = useNavigate()
 console.log(props.searchResult)

  return (
    <div onClick={() =>navigate(`/product`,{state:{categoryName:props?.searchResult.name}} )} >
      <div className="w-[609px] h-[64px] flex flex-col gap-[6px]">
        <div className="w-full flex flex-row pl-[35px]">
          <div className="w-[64px] h-[64px] border border-slate-100 flex items-center pl-[8px]">
            <img src={mobilebar} className="w-[50px] h-[50px]" alt="" />
          </div>
          <div className="flex flex-col gap-[6px] pl-[18px]">
            <span className="font-[600] text-[18px] leading-[28px]">
              {props?.searchResult.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
