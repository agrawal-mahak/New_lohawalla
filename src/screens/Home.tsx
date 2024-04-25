import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import CategoryCard from './Components/CategoryCard'
import DiscountCard from './Components/DiscountCard'
import ShopWithUs from './Components/ShopWithUs'
import ProductCard from '../common/ProductCard'
import Carousel from './Components/Carousel'
import HomeImg from '../assets/homeImg.png'
import HomeVideo from '../assets/video.png'
import cation from '../assets/caption.png'
import FirstCategory from './Components/FirstCategory'
import Footer from '../common/Footer'
import Comp1 from './extra/Comp1'
import Comp2 from './extra/Comp2'
import SecondCategory from './Components/SecondCategory'
import CategorySecond from './Components/CategorySecond'
import Comp3 from './extra/Comp3'
 
const Home = () => {
  const slides = [<Comp1/>, <Comp2/>, <Comp3/>];
 
  return (
    <div className='bg-[#E2E8F0] relative z-30'>  
        <Navbar/>  
        <Header/>
        <div className='gap-6 mx-auto w-[80rem]'>
         <Carousel slides={slides}/> 
        </div>
         
        <div className='bg-[#E2E8F0]'>
            <div className='flex flex-wrap gap-6 mx-auto mt-[27.5rem] w-[70rem]'>
                <CategoryCard/>
                <DiscountCard/>
                 <div className='flex flex-col gap-3'>
                    <ShopWithUs/>
                    <div>
                        <img src={HomeImg} alt='home'/>
                    </div>
                 </div>
 
                 <div className='flex gap-6'>
                     <div>
                         <img src={HomeVideo} alt='video' className='h-[23rem] relative z-0'/>
                         <img src={cation} alt='caption' className='relative mt-[-23.2rem] h-[23rem]'/>
                     </div>
                     <CategorySecond/>
                 </div>
               
            </div>
 
            <div>
                <FirstCategory/>
                <SecondCategory/>
           </div>
        </div>
 
        <Footer/>
         
 
    </div>
  )
}
 
export default Home