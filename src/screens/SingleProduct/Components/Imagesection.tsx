import rod from "../../../assets/rod.png"
import bigtmt from "../../../assets/BIGTMT.png"
import { ItemDataProps } from "./ItemData";

interface ImagesectionProps {
  image: string;
  data: any;
}

 const Imagesection: React.FC<ImagesectionProps> = ({image,data}) => {
  console.log(data,"datais")

  return (
    <div className='flex justify-between gap-[22px]  '>
       <div className="flex flex-col gap-[16px] justify-between ">
          <img  src={image || (data && data.images && data.images[0]) || "https://m.media-amazon.com/images/I/51MLqxTajeL._SX679_.jpg"}  className="w-[92px] h-[86px] border" />
          <img src={image || (data && data.images && data.images[0]) || "https://m.media-amazon.com/images/I/51MLqxTajeL._SX679_.jpg"}  className="w-[92px] h-[86px] border" />
          <img src={image || (data && data.images && data.images[0]) || "https://m.media-amazon.com/images/I/51MLqxTajeL._SX679_.jpg"}  className="w-[92px] h-[86px] border" />
          <img src={image || (data && data.images && data.images[0]) || "https://m.media-amazon.com/images/I/51MLqxTajeL._SX679_.jpg"} className="w-[92px] h-[86px] border"/>  
       </div>
              
       <div>
       <img src={image || (data && data.images && data.images[0]) || "https://m.media-amazon.com/images/I/51MLqxTajeL._SX679_.jpg"}  className="" />
       </div>
    </div>
  )
}

export  default Imagesection;