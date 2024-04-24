import React from 'react'
import ProductCard from '../../common/ProductCard'
import {Link, useNavigate} from 'react-router-dom'
import { useCategoryProductAPI2Query, useCategoryProductAPIQuery, useParticularCategory2Query, useParticularCategoryQuery } from '../../Redux/Api/Category';
import { Product } from '../../types/types';
import defaultImg from '../../assets/cement.png';

const SecondCategory = () => {
  const navigate = useNavigate();
  const { data: CategoryProducts2 } = useCategoryProductAPI2Query("");
   console.log(CategoryProducts2 , 'cat2');

   const name2 = CategoryProducts2?.[4]?.name;  
   const { data: CategoryProductsResponse2 } = useParticularCategory2Query(
     name2 || ""   
   );
   console.log(CategoryProductsResponse2,"categoryResponse");

  return (
    <div className='bg-[#FFFFFF] w-full mt-10 py-5'>
            <div className='flex justify-between items-center p-3 mx-16'>
                <h1 className='text-[#1E293B] font-inter text-2xl font-semibold'>
                    {CategoryProductsResponse2?.product[1].name}
                </h1>
                <div  className='cursor-pointer' onClick={() => navigate("/items", {state: { name: CategoryProductsResponse2?.product[1].cname}})}  > 
                <span className='font-inter font-semibold text-[1rem] text-[#5097A4]'>
                        Shop of collection →
                </span>
              </div>
            </div>

            <div className='flex flex-wrap gap-10 mx-24 my-3 p'>
            {CategoryProductsResponse2?.product.slice(0, 4).map((i: Product) => (  
              <ProductCard
                key={i._id}
                _id={i._id}
                name={i.name}
                description={i.description}
                mrpPrice={`${i.netRate.toFixed(3)} / ${i.itemUnit}`}  
                image={i.image.length > 0 ? i.image[0] : defaultImg}
                status={i.status}
              />
            ))}
            </div>
    </div>
  )
}

export default SecondCategory