import React from 'react'
import ProductCard from '../../common/ProductCard'
import {Link, useNavigate} from 'react-router-dom'
import { useCategoryProductAPIQuery, useParticularCategoryQuery } from '../../Redux/Api/Category';
import { Product } from '../../types/types';
import defaultImg from '../../assets/cement.png';
 
const FirstCategory = () => {
  const navigate = useNavigate();
  const { data: CategoryProducts } = useCategoryProductAPIQuery("");
  console.log(CategoryProducts , 'cat');
 
  const name = CategoryProducts?.[0]?.name; // Safely access the first category name
  const { data: CategoryProductsResponse } = useParticularCategoryQuery(
    name || ""
  );
   console.log(CategoryProductsResponse, "name response")
 
  return (
    <div className='bg-[#FFFFFF] w-full mt-10 py-5'>
            <div className='flex justify-between items-center p-3 mx-16'>
                <h1 className='text-[#1E293B] font-inter text-2xl font-semibold'>
                    {CategoryProductsResponse?.product[1].name}
                </h1>
                <div   className='cursor-pointer' onClick={() => navigate("/items", {state: { name: CategoryProductsResponse?.product[1]?.description}})}  > 
                <span className='font-inter font-semibold text-[1rem] text-[#5097A4]'>
                        Shop the collection →  
                </span>
              </div>
            </div>
 
            <div className='flex flex-wrap gap-10 mx-24 my-3 p'>
            {CategoryProductsResponse?.product.slice(0, 4).map((i: Product) => (
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
 
export default FirstCategory