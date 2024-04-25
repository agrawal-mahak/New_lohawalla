import { useAllCategoriesQuery } from '../../Redux/Api/Category';
import ImgCard from './ImgCard';
import defaultImg from '../../assets/cement.png';
import {Link} from 'react-router-dom'

interface CardData {
  id: string;
  image: string;
  itemCount: number;
  name: string;
}

interface ImgCardProps {
  data: CardData;
}

const CategoryCard = () => {
  const { data, isLoading } = useAllCategoriesQuery("");
  console.log(data, 'data2');

  return (
    <div className='bg-[#ffffff] max-w-[23rem] h-[23rem] p-6'> 
      <h1 className='font-inter font-bold text-md pb-2'>Build your home With us</h1>
      <div className='flex flex-col gap-4'>  
        <div className='flex gap-4 flex-wrap cursor-pointer'>
          {data?.slice(4,8).map((category: CardData) => (   
            <ImgCard key={category.id} data={category}/>
          ))}
        </div>  
        <Link to='/items'>     
            <h2 className='text-[#007185] font-inter text-md font-semibold mt-4'>See more</h2>  
        </Link>  
      </div>
    </div>
  );
}

export default CategoryCard;
