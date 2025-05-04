import React from "react";
import serviceData from "./data/ServiceData";
import ServiceSlider from "./ServiceSlider";
import { Check } from "lucide-react";

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
            Tailored solutions designed to give your business the competitive edge and drive success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {serviceData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full"
            >
              {/* Image Slider */}
              <ServiceSlider images={item.image} />

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  {/* Capacity */}
                  {item.capacity && (
                    <span className="text-xs bg-blue-100 text-blue-700 font-medium px-2 py-1 rounded-md">
                      {item.capacity}
                    </span>
                  )}

                  {/* Brands */}
                  {item.brand.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.brand
                        .filter((brand) => brand.trim() !== "" && brand.trim() !== ",")
                        .map((brand, i) => (
                          <span
                            key={i}
                            className="text-xs bg-blue-100 text-blue-700 font-medium px-2 py-1 rounded-md"
                          >
                            {brand}
                          </span>
                        ))}
                    </div>
                  )}
                </div>

                {/* Title */}
                <span className="inline-block bg-buttonBg text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
                  {item.name}
                </span>

                {/* Description */}
                <p className="text-textColor text-base leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Services List */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-headingColor mb-6">
            Our Products and Services
          </h2>
          <ul className="space-y-3">
            {[
              "Ture Online UPS",
              "Off-Line UPS",
              "IPS",
              "AVR",
              "Industrial Stabilizer",
              "Inverter",
              "Battery",
              "Battery Charger",
              "Solar Inverter",
            ].map((service, idx) => (
              <li key={idx} className="flex items-center gap-2 text-base md:text-lg font-semibold text-headingColor">
                <Check size={20} className="text-green-600" />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Ourservices;
