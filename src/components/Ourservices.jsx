import React, { useState } from "react";
import serviceData from "./data/ServiceData";
import ServiceSlider from "./ServiceSlider";

const Ourservices = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24 pt-28">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-headingColor mb-4">
            Our Awesome Services
          </h2>
          <p className="text-textColor text-lg max-w-2xl mx-auto">
            Tailored solutions designed to give your business the competitive
            edge and drive success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 h-auto">
          {serviceData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md transition-all overflow-hidden duration-300 hover:shadow-xl border border-gray-100 flex flex-col h-full"
            >
              {/* Service Image */}
              <ServiceSlider images={item.image} />

              {/* Service Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between">
                  {item.capacity === '' ? (
                    ''
                  ) : (
                    <span className="text-xs bg-gray-100 p-2 px-4 w-fit font-semibold rounded-md">
                    {item.capacity}
                  </span>
                  )}
                  {item.brand === "" ? (
                    ""
                  ) : (
                    <span className="text-xs bg-gray-100 p-2 px-4 w-fit font-semibold rounded-md">
                      {item?.brand}
                    </span>
                  )}
                </div>
                <span className="inline-block w-fit bg-buttonBg text-white text-sm font-medium px-4 py-2 rounded-full mb-4 mt-4">
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

export default Ourservices;
