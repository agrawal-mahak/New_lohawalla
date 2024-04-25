import React, { useState } from 'react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

interface CarouselProps {
  slides: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="relative z-20">
      {slides.map((slide:any, index:any) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-transform transform ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          } ${index === currentSlide ? '' : '-translate-x-full'}`}
        >
          {slide}
        </div>   
      ))}
      <button
          className="absolute mt-[14rem] left-0 transform -translate-y-1/2  px-5 py-20 rounded-md text-white bg-gradient-to-r from-rgba-80-151-164-24 to-rgba-230-235-242-24 h-screen"
          onClick={prevSlide}
        >
          <SlArrowLeft size={35} className='font-extrabold'/>
      </button>
      <button
          className="absolute mt-[14rem] right-0 transform -translate-y-1/2 px-5 py-20 rounded-md text-white bg-gradient-to-r from-rgba-80-151-164-24 to-rgba-230-235-242-24 h-screen"
          onClick={nextSlide}
        >
        <SlArrowRight size={35}/>
      </button>
    </div>
  );
};

export default Carousel;
