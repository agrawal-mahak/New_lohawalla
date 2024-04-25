import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";

interface DropdownOption {
  value: string;
  label: string;
}

const Dropdown: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const options: DropdownOption[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  const specialOption: DropdownOption = { value: 'special', label: 'All' };

  const handleSelectOption = (value: string) => {
    setSelectedOption(value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  console.log(searchQuery, "search");

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );
      
  return (
    <div className='  flex items-center h-[40px] '>
        <select onChange={(e) => handleSelectOption(e.target.value)} value={selectedOption || ''} className='focus:outline-none bg-[#F3F3F3] h-[40px] w-[52px] p-1'>
        <option value={specialOption.value} className='bg-[#F3F3F3] m-2'>{specialOption.label}</option>
        {filteredOptions.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
        </select>
        <input
            type='text'
            placeholder='Search options...'
            value={searchQuery}
            onChange={handleSearchChange}
            className=' rounded-md focus:outline-none w-[45rem] ml-3'
        />
        <div className='bg-[#FEBD69] mr-0'>
        <IoSearchOutline  size={25} className='m-2'/>

        </div>
     
    </div>
  );
};

export default Dropdown;

