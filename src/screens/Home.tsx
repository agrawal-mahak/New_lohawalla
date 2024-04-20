import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import CategoryCard from './Components/CategoryCard'
import DiscountCard from './Components/DiscountCard'
import ShopWithUs from './Components/ShopWithUs'
import ProductCard from '../common/ProductCard'
import Carousel from './Components/Carousel'


const Home = () => {
  const images = [
    'https://larainfo.com/storage/canvas/images/QS5nTwWLrJ5BDedU71tnj02j8ZxhFxx6lwpck1Oc.png?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-2',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
  ];

  return (
    <div>   
        <Navbar/>  
        <Header/>
        <Carousel images={images}/>
         <div className='flex flex-row gap-2'>
            <CategoryCard/>
            <DiscountCard/>
            <ShopWithUs/>
            
         </div>
         <div className='ml-10'>
            <ProductCard/>
         </div>

    </div>
  )
}

export default Home