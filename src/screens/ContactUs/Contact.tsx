import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import chaw from "../../assets/chawlas.png"

const Contact = () => {
  return (
     
            <div>     
                <Navbar />
                <Header />

                  <div className='px-[104px] py-[40px] flex flex-col items-center gap-[48px] '>
                     <div  className='flex flex-col gap-[24px] items-center'>
                      <div  className='font-[700]  text-[32px] leading-[38px] '>
                      About Us 
                      </div>
                    
                      <div className='font-[500]  text-[16px] leading-[19px] '>
                      We offer instant online quotes, payment and ordering for high-quality, high-precision, custom metal parts – straight from our factory.
                      </div>

                     </div>

                     <div className='w-full bg-slate-100 h-[548px] border rounded-[14px] py-[56px] px-[42px]  flex  gap-[48px]'>
                         <div className='w-full h-full'>
                           <img src={chaw} />
                         </div>

                         <div className='font-[400] text-[20px] leading-[36px]  '>
                         Established in year 2002, we "Chawla Ispat Private Limited" is one of the leading Manufacturer & Trader of Roofing Sheets, Prakash Surya Pipe, Galvanized Corrugated Sheets, GI Sheets, Color Coated Coils, Air Ventilators and many more. Our claim to success is hallmarked by the offered quality products that gained us huge recognizance. We are working towards development through a determined team of people to meet the most stringent requirements of customers.
                         Under the leadership of our mentor, "Mr. Gurbaj Singh Chawla", we have been able to attain a commendable position in this domain. His excellent management skills, profound experience, and innovative business ideas has helped us in catering to the huge clientele across the nation.
                         </div>

                     </div>

                     <div className='bg-gray-300 px-[2rem] py-[1rem] border rounded-[19px]'>
                       Get in touch 
                     </div>

                      
                  </div>



            </div>  
   
  )
}

export default Contact