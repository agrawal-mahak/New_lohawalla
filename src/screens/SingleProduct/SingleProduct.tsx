import React from 'react'
import Imagesection from './Components/Imagesection';
import ItemData from './Components/ItemData';
import ProductDetails from './Components/ProductDetails';
import Description from './Components/Description';
import Footer from '../../common/Footer';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import RelatedItem from './Components/RelatedItem';
import { useLocation } from 'react-router-dom';

 const SingleProduct = () => {
       const location = useLocation();
       const props = location.state;

       console.log(props)

  return (
    <>
      
     <Navbar/>  
        <Header/>
    <div className='px-[80px]' >
    <RelatedItem />
          <div className=' flex justify-between px-[27px] '>
          <div className='flex flex-col justify-between'>
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