import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ServiceSlider = ({ images }) => {
  const imageArry = Array.isArray(images) ? images : [images];
  const [currentIndex, setcurrentIndex] = useState(0);

  //   prevSlide
  const prevSlide = () => {
    setcurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageArry.length - 1 : prevIndex - 1
    );
  };

  // next slide
  const nextSlide = () => {
    setcurrentIndex((prevIndex) =>
      prevIndex === imageArry.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className=" w-full">
        <div className="relative">
          <img
            src={imageArry[currentIndex]}
            className="object-cover w-full h-72"
            alt={currentIndex + 1}
          />

            {imageArry.length > 1 && (
              <div className="absolute left-0 top-0 w-full h-full flex items-center justify-between">
              <ChevronLeft
                onClick={prevSlide}
                className="bg-gray-600 hover:bg-buttonBgHover p-1 cursor-pointer transition-all text-white rounded-full"
              />
              <ChevronRight
                onClick={nextSlide}
                className="bg-gray-600 hover:bg-buttonBgHover p-1 cursor-pointer transition-all text-white rounded-full"
              />
            </div>
            )}

        </div>
      </div>
    </>
  );
};

export default ServiceSlider;
