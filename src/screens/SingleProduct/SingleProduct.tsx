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
import { useSingleProductQuery } from '../../Redux/Api/ProductAPI';

 const SingleProduct = () => {
  const location = useLocation();
  const { productName, name, mrpPrice, status, description, image, _id,data} = location.state ?? {};
  
  console.log("Received State:", location.state); 
  console.log(_id, 'id');

  const { data:ProductData, isLoading } = useSingleProductQuery(_id);     

  // console.log(productName, 'pd');
  console.log(data, "name");

  return (
    <>
     <Navbar/>  
      <Header/>
    <div className='px-[80px]' >
      <RelatedItem />
          <div className=' flex justify-between px-[27px]'>
          <div className='flex flex-col justify-between'>
        <Imagesection
         image={image}
         data={data ? data :ProductData }
         />
        <ProductDetails />
        </div>

     <ItemData 
        productName={productName}
        name={name}
        mrpPrice={mrpPrice}
        status={status}
        description={description}
        image={image}
        _id={_id}
        data={data ? data :ProductData }
        isLoading={isLoading}/>
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