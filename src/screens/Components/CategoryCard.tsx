import { useAllCategoriesQuery } from '../../Redux/Api/Category';
import ImgCard, { CardData } from './ImgCard';
import defaultImg from '../../assets/cement.png';
 

const CategoryCard = () => {
  const { data, isLoading } = useAllCategoriesQuery("");
  // console.log(data, 'data');
  
  return (
    <div className='bg-[#ffffff] p-5 mt-2 max-w-[23rem] z-20'> 
      <h1 className='font-inter font-bold text-md pb-2'>Top Category for you</h1>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4 flex-wrap'>
            {data?.slice(0,4).map((category: CardData) => (   
              <ImgCard key={category.id} data={category}/>       
            ))}
        </div>      
      </div>
    </div>
  );
}

export default CategoryCard;
