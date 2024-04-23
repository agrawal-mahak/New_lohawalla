import rod from "../../../assets/rod.png"
import bigtmt from "../../../assets/BIGTMT.png"

 const Imagesection = () => {
  return (
    <div className='flex justify-between gap-[22px]  '>
       <div className="flex flex-col gap-[16px] justify-between ">
       <img src={rod}  className="w-[92px] h-[86px] border" />
       <img src={rod} className="w-[92px] h-[86px] border" />
       <img src={rod} className="w-[92px] h-[86px] border" />
       <img src={rod}  className="w-[92px] h-[86px] border"/>
       </div>

       <div>
       <img src={bigtmt}  className="" />
       </div>
    </div>
  )
}

export  default Imagesection;