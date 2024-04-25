import React, { useEffect, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { SearchResult } from '../../types/types';
import { useSearchAllProductsMutation } from '../../Redux/Api/priceAPI';
import { MdOutlineSearch } from "react-icons/md";
import SearchBox from './SearchBox';
import { useLocation, useNavigate } from 'react-router-dom';

interface DropdownOption {
  value: string;
  label: string;
}

const Dropdown: React.FC = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  // const [searchQuery, setSearchQuery] = useState<string>('');
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult>();
  const [showSearchBox, setShowSearchBox] = useState(false);
 
  const [menu, setMenu] = useState(false);
  const [searchAllProducts, { data: Results }] = useSearchAllProductsMutation();
  const options: DropdownOption[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  const specialOption: DropdownOption = { value: 'special', label: 'All' };

  const handleSelectOption = (value: string) => {
    setSelectedOption(value);
  };

  // const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchQuery(e.target.value);
  // };

  // const filteredOptions = options.filter(option =>
  //   option.label.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const location = useLocation();

  const handleSearch = async (value: any) => {
    setSearch(value);
    if (value.length === 0) {
      setShowSearchBox(false);
    } else {
      setShowSearchBox(true);
    }

    try {
      const response = await searchAllProducts(value);
      setSearchResults(response.data);
       console.log(searchResults,"searchresults");
    } catch (error) {
      console.error("Error searching products:", error);
    }
  };



  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const searchBox = document.getElementById("search-box");
      if (searchBox && !searchBox.contains(event.target as Node)) {
        console.log("outside")
        setShowSearchBox(false);
         
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    setShowSearchBox(false); // Hide search box when URL changes
  }, [location.pathname]);


  const showSearchBoxOnClick = () => {
    setShowSearchBox(true);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // Navigating to the desired page
      navigate("/items", { state: { results: searchResults } });
      setShowSearchBox(false);
    }
  };

  console.log(searchResults, "koo");

  return (
    <div className=' relative z-30 flex items-center h-[40px] '>
        <select onChange={(e) => handleSelectOption(e.target.value)} value={selectedOption || ''} className='focus:outline-none bg-[#F3F3F3] h-[40px] w-[52px] p-1'>
        <option value={specialOption.value} className='bg-[#F3F3F3] m-2'>{specialOption.label}</option>
        
        </select>
        <div className=' rounded-md focus:outline-none w-[45rem] ml-3'>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            onClick={showSearchBoxOnClick}
            onKeyPress={handleKeyPress}
            className=' rounded-md focus:outline-none w-[45rem] ml-3'
          />
         
        </div>
        <div className='bg-[#FEBD69] mr-0'>
        <IoSearchOutline  size={25} className='m-2'/>

        
        </div>
      
        {showSearchBox && (
        <div id="search-box" className=''>
          <SearchBox searchResults={searchResults} />
        </div>
      )}

    </div>
  );
};

export default Dropdown;

