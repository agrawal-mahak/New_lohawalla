import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import {
  useCategoriesNameQuery,
  useCompaniesNameQuery,
} from "../../../Redux/Api/NamesAPI";


type FiltersProps = {
  categorychange: (data: {
    search: string;
    checkboxes: { [key: string]: boolean };
  }) => void;
};



export const Filters: React.FC<FiltersProps> = ({ categorychange }) => {
  const { data: categoriesResponse } = useCategoriesNameQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );
  //   console.log(categoriesResponse[0].name)

  const { data: companiesResponse } = useCompaniesNameQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );
  //   console.log(companiesResponse)

  const [formData, setFormData] = useState({
    search: "",
    checkboxes: {} as { [key: string]: boolean },
  });
  console.log(formData,"sahi to mera code")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    categoryName: string
  ) => {
    const { checked } = e.target;
    const updatedCheckboxes = { ...formData.checkboxes };
    if (checked) {
      updatedCheckboxes[categoryName] = true; // If checked, set to true
    } else {
      delete updatedCheckboxes[categoryName]; // If unchecked, remove from checkboxes
    }
    const updatedFormData = { ...formData, checkboxes: updatedCheckboxes };
    setFormData(updatedFormData);
    categorychange(updatedFormData);

  };

  const filteredCategories = categoriesResponse
    ? categoriesResponse.filter((category: any) => {
        const regex = new RegExp(formData.search, "i"); // 'i' flag for case-insensitive matching
        return regex.test(category.name);
      })
    : [];

  const categoriesToDisplay = filteredCategories.slice(0, 5);



  

  return (
    <div>
      <div className="  flex flex-col gap-[0.6rem] ">
        <div className="flex flex-col gap-[0.6rem]  mt-[16px]">
          <div className="font-[700] text-[14px] leading-[16px] ">Category</div>

          <div className="flex border items-center  bg-[#F8FAFC] mr-3 py-1 rounded-[7px] ">
            <IoSearch size={18} className="text-[#9CA3AF] pl-[4px]" />
            <input
              type="text"
              name="search"
              placeholder="Search"
              value={formData.search}
              onChange={handleInputChange}
              className="font-inter leading-7 text-[#9CA3AF] ml-2 md:w-[599px] font-Inter text-md bg-[#F8FAFC] border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#D1D5DB] rounded-md"
              style={{ outline: "none", boxShadow: "none" }}
            />
          </div>
          <div className="pl-[12px] flex flex-col gap-[4px]">
            {categoriesToDisplay.length > 0 ? (
              categoriesToDisplay.map((category: any, index: number) => (
                <div
                  key={index}
                  className="font-[500] text-[14px] leading-[16px]"
                >
                  <input
                    type="checkbox"
                    id={`myCheckbox${index}`}
                    name={`myCheckbox${index}`}
                    checked={formData.checkboxes[category.name] || false}
                    onChange={(e) => handleCheckboxChange(e, category.name)}
                    className="mr-2"
                  />
                  {category.name}
                </div>
              ))
            ) : (
              <div>No categories available</div>
            )}
          </div>

          <div className="flex items-center gap-[3px]">
            <IoIosArrowDown />
            <div className="text-[#007185] font-[500] text-[14px] leading-[16px]">
              See more 
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
    </div>
  );
};
