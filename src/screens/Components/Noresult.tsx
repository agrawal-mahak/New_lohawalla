import search from "../../assets/Search.png"
import searchIcon from "../../assets/ri_search-line.png";

const NoResult = () => {
  return (
     
     <div className="w-[500px] h-[272px] flex justify-center items-center   flex flex-col">
                              <div className=" flex justify-center items-center flex-col w-[142px] h-[182px] ">
                             <div>
                            <img src={search} />
                            </div> 
                             
                             <div className="flex flex-col">
                                  <span>No results found</span>
                                  <span className="font-[600] text-[14px] leading-[20px] text-[#6366F1] text-center  border-b-[#6366F1]">Search Again</span>
                             </div>

                             </div>  

                   </div>

            
           
  )
}


export default NoResult;