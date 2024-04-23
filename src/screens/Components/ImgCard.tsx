import React from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../../assets/image1.png';

export interface CardData {
  id: string;
  image: string;
  itemCount: number;
  name: string;
  onClick?: () => void;
}

interface ImgCardProps {
  data: CardData;
}
 
const ImgCard: React.FC<ImgCardProps> = (props) => {
  const navigate = useNavigate();
  const { id, image, itemCount, name } = props.data;

  return (
    <div>      
      <div className='bg-[#F6FAFB] w-[150px] justify-center flex flex-col' onClick={() => navigate('/items', {state:{name}})}>
        <div className='w-[6.5rem] h-[5rem] overflow-hidden mx-auto'> 
          <img src={image} alt={name}/>
        </div>
        <h1 className='flex text-center mt-2 mx-auto font-inter text-sm font-semibold'>{name}</h1>
      </div>
    </div>
  );
};

export default ImgCard;
