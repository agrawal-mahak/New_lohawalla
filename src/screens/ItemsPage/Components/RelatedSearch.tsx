import SearchCard from "./SearchCard"


const RelatedSearch = () => {
  return (
    <div className="  flex flex-col gap-[12px]">
           <div className="font-[400] text-[20px] leading-[23px]">
              Related Search
           </div>

             <div className=" flex  gap-[24px]">
                  <SearchCard />
                  <SearchCard />
                  <SearchCard />
             </div>
    </div>
  )
}


export   default RelatedSearch