import React from 'react'
import image1 from '../../assets/image1.png';

interface CardData {
  id: string;
  image: string;
  itemCount: number;
  name: string;
}

interface ImgCardProps {
  data: CardData;
}

const imgCard : React.FC<ImgCardProps> = (props) => {
  const { id, image, itemCount, name } = props.data;
  console.log( name);
  return (
    <div>
         <div className='bg-[#F6FAFB] w-[150px] justify-center flex flex-col'>
                     <div className='w-[6.5rem] h-[5rem] overflow-hidden mx-auto'>
                        <img src={image} className=''/>
                     </div>
                    <h1 className='flex text-center mt-2 mx-auto font-inter text-sm font-semibold'>{name}</h1>
         </div>
    </div>
  )
}

export default imgCard