import rod from "../../../assets/rod.png"
import bigtmt from "../../../assets/BIGTMT.png"
import { ItemDataProps } from "./ItemData";

interface ImagesectionProps {
  image: string;
}

 const Imagesection: React.FC<ImagesectionProps> = ({image}) => {
  return (
    <div className='flex justify-between gap-[22px]  '>
       <div className="flex flex-col gap-[16px] justify-between ">
          <img src={rod} className="w-[92px] h-[86px] border" />
          <img src={rod} className="w-[92px] h-[86px] border" />
          <img src={rod} className="w-[92px] h-[86px] border" />
          <img src={rod} className="w-[92px] h-[86px] border"/>  
       </div>
              
       <div>
       <img src={image}  className="" />
       </div>
    </div>
  )
}

export  default Imagesection;