import React, { useState } from 'react';

interface CarouselProps {
  images: string[];
  
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);   

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
   
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-full py-5 bg-black">
      <div className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide-${index}`}
            className={
              index === currentIndex
                ? 'block w-full h-full transition duration-500 ease-in-out'  
                : 'hidden'     
            } 
          />      
        ))}                    
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent text-white font-bold px-4 py-2 z-10"
          onClick  = {prevSlide}>
            Prev      
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent text-white font-bold px-4 py-2 z-10"
          onClick={nextSlide}>
            Next 
        </button>
      </div>
    </div>
  );
};

export default Carousel;
