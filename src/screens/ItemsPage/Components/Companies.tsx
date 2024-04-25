import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { useCompaniesNameQuery } from '../../../Redux/Api/NamesAPI';
import { IoSearch } from 'react-icons/io5';

type companiesProps = {
  companychange: (data: {
    search: string;
    checkboxes: { [key: string]: boolean };
  }) => void;
};

const Companies: React.FC<companiesProps> = ({companychange}) => {
    const [dispalycount ,setDisplayCount] = useState<number>(7)
  const { data: CompaniesResponse } = useCompaniesNameQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );

  // console.log(CompaniesResponse, 'check');
  const [form, setForm] = useState({
    search: '',
    checkboxes: {} as { [key: string]: boolean } 
  });
  // console.log(form,"mahak ka error");

   const handleInputChange = ( e: React.ChangeEvent<HTMLInputElement>) =>{
      const {name,value} = e.target
        setForm ({ ...form , [name]: value})
   }

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    companyName: string
  ) => {
    const { checked } = e.target;
    const updatedCheckboxes = { ...form.checkboxes };
    if (checked) {
      updatedCheckboxes[companyName] = true; // If checked, set to true
    } else {
      delete updatedCheckboxes[companyName]; // If unchecked, remove from checkboxes
    }
    const updatedFormData = { ...form, checkboxes: updatedCheckboxes };
    setForm(updatedFormData);
     companychange(updatedFormData);
  };

  const filteredCompanies = CompaniesResponse ? CompaniesResponse.filter((company: any) => {
    const regex = new RegExp(form.search, 'i'); // 'i' flag for case-insensitive matching
    return regex.test(company.name);
  }) : [];

  // Display only the first 5 companies

    const handleMoreClick = () => {
        setDisplayCount(prevCount => prevCount +5);
    }
  
  const companiesToDisplay = filteredCompanies.slice(0, dispalycount);


  return (
    <div>

<div className="flex flex-col gap-[0.6rem]">
          <div className="font-[700] text-[14px] leading-[16px] ">Companies </div>

           <div className='flex border items-center  bg-[#F8FAFC] mr-3 py-1 rounded-[7px]'>
              <IoSearch size={18} className='text-[#9C3AF] pl-[4px]' />
             <input 
               type='text'
               name='search'
               placeholder='Search'
               value={form.search}
               onChange={handleInputChange}
               className="font-inter leading-7 text-[#9CA3AF] ml-2 md:w-[599px] font-Inter text-md bg-[#F8FAFC] border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#D1D5DB] rounded-md"
               style={{ outline: "none", boxShadow: "none" }}
            />


           </div>

          <div className="pl-[8px]">
            <div className="font-[500] text-[14px] leading-[16px] flex flex-col  gap-[5px]">
              { companiesToDisplay.length > 0 ?(
                    companiesToDisplay.map((company:any,index:number) => (
                        <div
                          key={index}
                          className='font-[500] text-[14px] leading-[16px]'
                        >
                          <input 
                            type='checkbox'
                            id={`myCheckbox${index}`}
                            name={`myCheckbox${index}`}
                            checked={form.checkboxes[company.name] || false}
                            onChange={(e) => handleCheckboxChange(e,company.name)}
                            className='mr-2'
                          />
                          {company.name}
                        </div>
                    )

              )
              ):(
                  <div>No Companies Available</div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-[3px]" onClick={handleMoreClick} >
            <IoIosArrowDown />
            <div className="text-[#007185] font-[500] text-[14px] leading-[16px] cursor-pointer" >
              See More
            </div>
          </div>
        </div>
    </div>
  )
}

export default Companies
