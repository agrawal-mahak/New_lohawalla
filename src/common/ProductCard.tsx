// import React from 'react'
// import cement from '../assets/cement.png'
// const ProductCard = () => {
//   return (
//     <div className='bg-blue-400 flex flex-col w-[295px] h-[484.33px]'> 
//         <div className='bg-red-600 relative'>
//             <img src={cement} alt='y' className='absolute'/>
//         </div>
//         <div>
//             <h1 className='font-inter text-lg text-[#111827]'>
//                 Ambuja Cement (300/Bag) 
//             </h1>
//         </div>
//     </div>
//   )
// }

// export default ProductCard



import React from 'react'
import shieldDone from "../../../assets/Shield_Done.png";
import rect from '../../../assets/Rectangle.png'
import shareIcon from "../../../assets/share.png";
import star from "../assets/star.png";
import cement from '../../src/assets/cardImg.png';
// import { useAddToCartMutation } from '../../../Redux/Api/cartAPI';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import heartIcon from "../../../assets/Heart.png";

type ImageUrl = string;
type MobileCardProps = {
  name?: string;
  description?: string;
  mrpPrice?: string;
  image?: string | undefined;
  // productRating: number;
  // manufacturer: string;
  // size: number;
  //    height: number;
  //    weight: number;
  //    thickness: number ;
  //    material:string;
  //    category: Categories;
  //    review: string;
  _id?: string;
  status?: boolean;
  productName?: string
  companyName?: string
  //  addToWishList : (_id:string) => void;
};

const ProductCard = ({
    name,
    description,
    image,
    mrpPrice,
    _id,
    status,
    productName,
    companyName
  }: MobileCardProps) => {
    const navigate = useNavigate();
  // const [addToCartMutation] = useAddToCartMutation();

  // const handleaddToCart = (id: string | undefined) => {
  //   const notify = (data: string) => toast(data);
  //   if (id) {
  //     addToCartMutation(id);

  //     notify("Product added to cart");
  //   }
  // };

  const shareOnWhatsApp = () => { 
    const message = "Your message here";
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
        // <div className='md:w-[18.5rem] w-[11rem] h-full bg-white border border-[#ECF0F0] md:border md:border-[#ECF0F0] rounded-lg shadow-md shadow-gray-500/50
        //    hover:transform hover:scale-110 transition-transform duration-300 ease-out '>
        <div className='md:w-[18.5rem] w-[18.5rem] h-full bg-white border border-[#ECF0F0] md:border md:border-[#ECF0F0] rounded-lg shadow-md shadow-gray-500/50'>
           <div>
                <div className='flex justify-center'>
                            {/* <Link   to={`/product/${_id}`}
                                state={{
                                     name,
                                    description,
                                    image,
                                    mrpPrice,
                                     status,
                                    _id,
                                    productName
                                }}> */}

                       <img src={image} alt='rect' className='relative md:h-[14rem] h-[13.7rem] w-[17rem] py-3 
                        '/>
                        {/* <div className='bg-[#DCFCE7] flex flex-row gap-2 z-20 absolute -mt-[13.9rem] md:ml-2 ml-1 px-2 py-1 rounded-xl items-center'>
                                <img src={shieldDone} alt="shield" className='md:h-[15.56px] md:w-[13.22px] w-[8.81px] h-[10.37px]'></img>
                                <h1 className='font-inter text-[#047857] md:text-sm text-[10px] whitespace-nowrap'>Lohawalla Assured</h1>
                        </div> */}
                       {/* </Link>  */}

                    {/* <div className='bg-white cursor-pointer border-[#ECF0F0] rounded-bl-xl px-3  py-3 z-20 absolute  md:ml-[17rem] ml-[8.3rem]'>
                        <img src={shareIcon} className='h-[18px] w-[18px] md:h-[32px] md:w-[32px]' onClick={shareOnWhatsApp}></img>
                    </div> */}
                     {/* <div
                        onClick={() => _id && addToWishList(_id)}
                        >
                            <img src={heartIcon} alt='heart' className="h-3 w-3 md:h-5 md:w-5 absolute" />
                     </div> */}
                </div>
                <div className='ml-2'>
                    <h1 className='font-inter text-[#111827] md:text-xl text-[12px] md:leadingng-4 my-1 overflow-hidden max-h-[1rem] md:max-h-[1.5rem] font-bold'> 
                    {productName ? productName.split(' ').slice(0, window.innerWidth >= 768 ? 8 : 5).join(' ') : name ? name.split(' ').slice(0, window.innerWidth >= 768 ? 8 : 5).join(' ') : ''}
                         
                    </h1>
                    <p className='font-inter text-[#111827] md:text-xl text-[12px] md:leadingng-4 my-1 overflow-hidden max-h-[1rem] md:max-h-[1.5rem] font-bold'>(300/Bag)</p>
                    <p className='font-bold font-inter text-[#475569] md:text-[16px] text-[16px] md:leading-6 leading-4 mt-4 md:max-h-[1.5rem]'>
                    {description ? 
                      description.substring(0, window.innerWidth >= 768 ? 32 : 25) : 
                      description ? description.substring(0, window.innerWidth >= 768 ? 80 : 50) : 'more..'}  
                    </p>
                    <p className='font-bold font-inter text-[#94A3B8] md:text-xs text-[12px] md:leading-6 leading-4'>
                      {companyName ? "Company:" + companyName : ""}
                        
                      </p>
                </div>
                {/* <p className='text-[#475569] text-[14px] font-bold md:text-[20px] my-1 ml-2'>₹{mrpPrice}</p> */}
                <div className='flex flex-row md:justify-around justify-around my-1 items-center mt-6'>
                    <div className='bg-[#2563EB] rounded-md md:px-4 px-2 md:py-1 flex flex-row items-center gap-2 whitespace-nowrap'>
                        <p className='text-[#FFFFFF] font-roboto font-semibold text-[12px] md:text-[12px] items-center'>3.7</p>
                        <img src={star} className='md:h-4 md:w-4 h-[10px] w-[10px] items-center -mt-1'/>
                    </div>
                    <p className='font-inter font-semibold  text-[12px] text-semibold text-[#94A3B8] whitespace-nowrap'>(474) reviews</p>
                    <div className='hidden md:block px-2 py-1 bg-[#65A30D] rounded-lg text-[#F7FEE7] whitespace-nowrap font-inter font-bold text-[12px]'>12% discount</div>
                </div>

                {/* button */}
               <div className='flex justify-center '>
                {/* <Link to={`/product/${_id}`}
                                state={{
                                    name,
                                    description,
                                    image,
                                    mrpPrice,
                                    status,
                                    _id,
                                    productName
                                }}> */}
                    <button 
                    // onClick={() => handleaddToCart(_id)}
                    className='bg-[#FEBD69] font-inter font-bold whitespace-nowrap md:mb-3 mb:-2 rounded-lg md:py-4 py-2 md:px-[3rem] px-2 my-2 md:text-sm text-[12px] text-[#0F172A]
                              hover:bg-white hover:text-[#0F172A] hover:border-2 hover:border-[#1E293B] hover:transition hover:duration-500'>  
                        Contact For Better Pricing      
                    </button>
                {/* </Link> */}
               </div>
            </div> 
        </div>
    
  )
}

export default ProductCard;