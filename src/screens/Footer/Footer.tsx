// import logo from "../../../../assets/footerLogo.png"
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const openGmail = () => {
    window.open('https://mail.google.com/mail/u/0/#inbox?compose=new', '_blank');
  };
  
  const shareOnTwitter = () => { 
    const url = `https://twitter.com/`;
    window.open(url, '_blank');
  };

  const shareOnLinkdln = () => { 
    const url = `https://www.linkedin.com/`;
    window.open(url, '_blank'); 
  };  

  return (       
    <div className='px-[30px]  sm:px-[70px] lg:px-[100px] py-[76px] bg-[#2A333E] overflow-hidden'>
         <div className='flex flex-col md:flex-row gap-10 justify-between'>
                <div className=" flex  gap-[9rem] justify-evenly w-full  ">
                      <div className='flex flex-col'>
                              <div className='text-[#8491A3] pb-[19px] font-[700] text-[14px] leading-[19.6px] tracking-[0.125rem] font-sans'>
                                  QUICK LINKS  
                              </div>  

                              <div className='flex flex-col justify-between  w-[170px] lg:w-[220px] gap-4 font-[400] text-[14px] leading-[20px] text-[#FFF] '>
                                <span className="hover:underline cursor-pointer">Why Lohawalla?</span>
                                <Link to="/product">  <span className="cursor-pointer hover:underline">Our products</span></Link>
                                {/* <Link to="/wishlist">   <span>Whishlist</span></Link> */}
                                {/* <Link to="/myOrder">   <span>My Orders</span></Link> */}
                                {/* <Link to="/yourOrders"> <span>My Account</span></Link> */}
                                <span className="cursor-pointer hover:underline">Chat with us</span>
                                <span className="cursor-pointer hover:underline">Register</span>
                              </div>  
                      </div>   
                    
                      <div className='flex flex-col '>
                              <div className='text-[#8491A3] pb-[19px] font-[700] text-[14px] leading-[19.6px] tracking-[0.125rem] font-sans'>
                                  RESOURCES 
                              </div>

                              <div className='flex flex-col justify-between w-[170px] lg:w-[220px] gap-4 font-[400] text-[14px] leading-[20px] text-[#FFF]'>
                              <Link to="/"><span className="hover:underline">Home</span></Link>
                              <Link to="/category"><span className="cursor-pointer hover:underline">Categories</span></Link>
                              <Link to="/product"><span className="cursor-pointer hover:underline">Products</span></Link>
                              <Link to="/company"><span className="cursor-pointer hover:underline">Companies</span></Link>
                              <Link to="/aboutus"><span className="cursor-pointer hover:underline">About us</span></Link>
                              <Link to="/contactus"><span className="cursor-pointer hover:underline">Contact us</span></Link>
                                {/* <span>Newsletter</span> */}
                              </div>
                      </div>        
                </div>

               <div className="flex justify-around w-full ">
               <div className='flex flex-col'>
                      <div className='text-[#8491A3] pb-[19px] font-[700] text-[14px] leading-[19.6px] tracking-[0.125rem] font-sans'>
                           COMPANY             
                      </div>

                       <div className='flex flex-col justify-between  h-[54px] font-[400] text-[14px] leading-[20px] text-[#FFF] '>
                          <Link to="/aboutus"> <span className="cursor-pointer hover:underline">About us</span></Link>
                          <span className="cursor-pointer hover:underline">Careers</span>
                       </div>
               </div> 
                                                   
               <div className='flex flex-col'>
                      <div className='text-[#8491A3] pb-[19px] font-[700] text-[14px] leading-[19.6px] tracking-[0.125rem] font-sans'>
                          CONTACT US
                      </div> 

                       <div className='flex flex-col justify-between  font-[400] text-[14px] leading-[20px] text-[#FFF]'>
                          <span className="cursor-pointer hover:underline" onClick={openGmail}>contact@lohawalla.com</span>
                       </div>
               </div>        
               </div>
         </div>
                                      
        <div className='h-[49.72px]  flex flex-row mt-[100px] justify-between'>
                 <div className="flex flex-row h-[49.72px] gap-[40px]">          
                       <Link to='/home'>  
                          <div>
                              {/* <img src={logo} className="w-[50px] h-12"/> */}
                          </div>      
                       </Link>  
                
                       <div className="flex flex-col gap-5 whitespace-nowrap md:flex-row font-[400] text-[12px] leading-[21.6px] text-[#8491A3] w-full font-inter">
                          <span className="cursor-pointer">© 2023 Lohawalla. All rights reserved.</span>
                          <span className="cursor-pointer">Terms of Service</span>
                          <span className="cursor-pointer">  Privacy Policy</span>    
                       </div>                                                                                                                  
                 </div>   
                                 
                 <div className="flex flex-row justify-between gap-[20px] text-[#fff] my-[8.5px] items-center">
                   <FaTwitterSquare className="w-[24px] h-[24px] cursor-pointer" onClick={shareOnTwitter}/> 
                   <FaLinkedin className="w-[24px] h-[24px] cursor-pointer" onClick={shareOnLinkdln}/>
                 </div>
        </div>     
    </div>
  )
}

export default Footer

       
