import {  useState } from "react";
import TmtCard from "./ProductCard";
import { SearchResult } from "../../types/types"
import CategoriesCard from "./CategoriesCard";
import NoResult from "./Noresult";


interface Item {
    name: string;
    type: string;
    id: string;
    code: string;
    // Add other properties as needed
}

interface Product {
    name: string;
    type: string;
    id: string;
    // Add other properties as needed
}

interface Company {
    name: string;
    type: string;
    id: string;
    // Add other properties as needed
}

interface Category {
    name: string;
    type: string;
    id: string;
    // Add other properties as needed
}

interface SearchResultData {
    category: Category[] | null;
    company?: Company[];
    item?: Item[];
    product: Product[] | null;
}

interface SearchBoxProps {
    searchResults: SearchResultData | undefined;
}


const SearchBox = (props: SearchBoxProps) => {

    const [showSearchResult, setShowSearchResult] = useState(true)

// console.log(props.searchResults)


    return (

        <>
       

            {/* // on clicking/typing */}
            <div className="fixed z-50  top-[78px] left-[19rem]  bg-white w-[736px] h-[264px]  flex flex-col gap-[39px]  border rounded-[6px] px-[12px] py-[8px] ">
            <div className="w-[716px] flex flex-col gap-[16px]">
                {/* <div className="flex flex-row justify-evenly items-center  border-b border-gray-300 w-full h-[55px] ">
                    <span
                        className={`border-b-[4px] border-${showSearchResult ? 'indigo' : 'transparent'}-400 w-[124px] h-[55px] flex items-center justify-center tab`}
                        onClick={() => setShowSearchResult(true)}
                    >
                        Products{' '}
                    </span>
                    {/* <span
                        className={`border-b-[4px] border-${!showSearchResult ? 'indigo' : 'transparent'}-400 w-[124px] h-[55px] flex items-center justify-center tab`}
                        onClick={() => setShowSearchResult(false)}  
                    >
                        Categories
                    </span> */}
                    {/* <span>Items</span> 
                </div> */}

                <div className="w-[716px] h-[250px]  flex flex-col gap-[4px] overflow-auto">
                    <div className="w-[716px]   flex flex-col gap-[4px] overflow-y-auto">
                        {showSearchResult ? (
                            <>
                                {/* Products tab content */}
                                {props.searchResults ?(
                                    <ul>
                                        {props.searchResults.product?.map((searchResult, index) => (
                                            <TmtCard key={index} searchResult={searchResult} />
                                        ))}
                                    </ul>
                                ) : (
                                    <div>
                                        <NoResult />
                                    </div>
                                )}
                            </>
                        ) : (
                            <>
                                {/* Categories tab content */}
                            { props.searchResults ?(
                                    <ul>
                                        {props.searchResults.category?.map((searchResult, index) => (
                                            <CategoriesCard key={index} searchResult={searchResult} />
                                        ))}
                                    </ul>
                                ) : (
                                    <div>
                                        <NoResult />
                                    </div>
                                ) }
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
          


        </>

    )
}

export default SearchBox

