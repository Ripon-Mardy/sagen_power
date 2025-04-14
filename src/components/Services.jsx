import React, { useState } from "react";
import serviceData from "./data/ServiceData";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-headingColor mb-4">
            Our Awesome Services
          </h2>
          <p className="text-textColor text-lg max-w-2xl mx-auto">
            Tailored solutions designed to give your business the competitive edge and drive success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {serviceData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md transition-all overflow-hidden duration-300 hover:shadow-xl border border-gray-100 flex flex-col h-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Service Image */}
              <div className="relative h-52 bg-gray-100">
                {Array.isArray(item.image) ? (
                  <div className="flex space-x-2 p-4 h-full items-center justify-center">
                    {item.image.map((img, imgIndex) => (
                      <img 
                        key={imgIndex} 
                        src={img} 
                        alt={`${item.name} illustration ${imgIndex}`}
                        className="object-contain h-40 transition-transform duration-300"
                      />
                    ))}
                  </div>
                ) : (
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredIndex === index ? "scale-105" : ""
                    }`}
                  />
                )}
              </div>

              {/* Service Content */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="inline-block bg-buttonBg text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
                  {item.name}
                </span>
                <p className="text-textColor text-base leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;