import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import ItemCard from "./Components/ItemCard";
import { IoIosArrowDown } from "react-icons/io";
import Footer from "../../common/Footer";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import RelatedSearch from "./Components/RelatedSearch";
import { Filters } from "./Components/Filters";
import Companies from "./Components/Companies";
import { useSearchFiltersMutation } from "../../Redux/Api/ProductAPI";
import { CombinedState } from "../../types/api-types";
import { Form } from "../../types/types";

const Items = () => {
  const [searchFilters, { data: SearchProductsResponse }, isLoading, isError] =
    useSearchFiltersMutation();

  const [combinedState, setCombinedState] = useState<CombinedState>({
    search: "", rating: null, company: null, category: null, sort: "", limit: 12, page: 1,
  });

  const [category, setCategory] = useState<FormData | null>(null);
  const [finalresult, setFinalResult] = useState(true);
  const [company, setCompany] = useState<Form | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleCategoryChange = (data: {
    search: string;
    checkboxes: { [key: string]: boolean };
  }) => {
    const { checkboxes } = data;
    console.log(data, "data");

    const selectedCategories = Object.keys(checkboxes).filter(
      (key) => checkboxes[key]
    );

    // Update the category state
    setCombinedState({
      ...combinedState,
      category: selectedCategories.length > 0 ? selectedCategories : null,
    });
  };

 const handleCompanyChange = (data: {
    search: string;
    checkboxes: { [key: string]: boolean };
  }) => {
    const { checkboxes } = data;
    console.log(data, "data");

    const selectedCompanies = Object.keys(checkboxes).filter(
      (key) => checkboxes[key]
    );

    // Update the category state
    setCombinedState({
      ...combinedState,
      company: selectedCompanies.length > 0 ? selectedCompanies : null,
    });
  };

  const [prevCombinedState, setPrevCombinedState] = useState<CombinedState | null>(null);

  useEffect(() => {
    searchFilters({ combinedState });
  }, [combinedState, searchFilters]);
  

  useEffect(() => {
    if (isError) {
      console.error("Error fetching products:", isError);
    }
  }, [isError]);

  // console.log(combinedState, "combinedstate");
  // console.log(SearchProductsResponse, "SearchProductsResponse");

const prevPage = () => {
   if (currentPage >1){
      setCurrentPage(currentPage -1);
      setCombinedState({ ...combinedState , page:currentPage-1})
   }
}

const nextPage = () => {
  if (currentPage < SearchProductsResponse.total / 6) {
    setCurrentPage(currentPage + 1);
    setCombinedState({
      ...combinedState,
      page: currentPage + 1,
    });
  }
};

// Handle company change
 
  return (
    <div>
      <Navbar />
      <Header />
      <div className="flex justify-between px-[18px] py-[12px] border-b shadow-lg">
        <span>1-16 of over 2,000 results for TMT</span>
        <div className="bg-slate-200 flex justify-center gap-[7px] items-center shadow-lg border rounded-lg w-[130px] h-[34px]">
          <select className="bg-slate-200 border rounded-lg h-full w-full shadow-md">
            <option value="">
              Sort By  <IoIosArrowDown />
            </option>
            <option value="company1">Company 1</option>
            <option value="company2">Company 2</option>
            {/* Add more companies here */}
          </select>
        </div>
      </div>

      <div className=" flex  h-full gap-[2rem] px-[1.67rem]">
        <div className=" w-[270px]    pl-[30px] flex flex-col gap-[0.6rem] border-r-[2px]">
          <Filters categorychange={handleCategoryChange} />
          <Companies companychange={handleCompanyChange} /> 
    
      </div>

        <div className="flex flex-col gap-[1rem]">
     
  <div className="w-full">
    {SearchProductsResponse &&
      SearchProductsResponse.products.map((product: any, index: number) => (
        <div key={index}>
          <ItemCard data={product} />
        </div>
      ))}
  </div>

          <div>
            <RelatedSearch />
          </div>
        </div>
      </div>

      <div className="h-[96px] flex justify-center items-center  ">
        <div className="flex flex justify-center items-center border  gap-[19px]  h-[48px]" >
              <div className="flex items-center gap-[1rem]"  onClick={prevPage}>
            <button
               className="border border-[#BCBCBC] h-11 w-11 flex justify-center items-center font-bold text-sm 
               text-[#64748B]"
              
            >
             <FaAngleLeft  />
            </button>
             <span>Previous</span>
             </div>
             <span className="flex gap-[2.2rem]"> 
            {currentPage> 1 ? currentPage -1 : ""}
          </span>

          <span className="flex gap-[2.2rem]"> 
            {currentPage}
          </span>

          <span className="flex gap-[2.2rem]"> 
            {currentPage + 1}
          </span>

            <div className="flex items-center gap-[1rem]" onClick={nextPage}>
          <span>Next</span>
          <button
               className="border border-[#BCBCBC] h-11 w-11 flex justify-center items-center font-bold text-sm 
               text-[#64748B]"
               
            >
          <FaAngleRight />
          </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Items;
