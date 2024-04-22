import rod from "../../../assets/rod.png"
import bigtmt from "../../../assets/BIGTMT.png"

 const Imagesection = () => {
  return (
    <div className='flex justify-between gap-[22px] '>
       <div className="flex flex-col gap-[16px] ">
       <img src={rod}  className="w-[92px] h-[92px] border" />
       <img src={rod} className="w-[92px] h-[92px] border" />
       <img src={rod} className="w-[92px] h-[92px] border" />
       <img src={rod}  className="w-[92px] h-[92px] border"/>
       </div>

       <div>
       <img src={bigtmt}  className="border" />
       </div>
    </div>
  )
}

export  default Imagesection;