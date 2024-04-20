import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import CategoryCard from './Components/CategoryCard'
import DiscountCard from './Components/DiscountCard'
import ShopWithUs from './Components/ShopWithUs'
import ProductCard from '../common/ProductCard'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
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