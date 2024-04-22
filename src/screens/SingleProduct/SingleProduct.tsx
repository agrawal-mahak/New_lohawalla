import React from 'react'
import Imagesection from './Components/Imagesection';
import ItemData from './Components/ItemData';
import ProductDetails from './Components/ProductDetails';
import Description from './Components/Description';
import Footer from '../Footer/Footer';

 const SingleProduct = () => {
  return (
    <>
    <div className='px-[80px]' >
          <div className=' flex justify-between px-[27px]'>
          <div className='flex flex-col gap-[16px]'>
        <Imagesection />
        <ProductDetails />
        </div>

     <ItemData />
     </div>

     <div>
        <Description />
     </div>

     
    </div>
    <Footer />
    </>
  )
}

export  default SingleProduct;