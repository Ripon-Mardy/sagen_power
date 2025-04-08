
import product1 from '../../public/images/product1.jpg';
import product2 from '../../public/images/product2.jpg';
import product3 from '../../public/images/product3.jpg';
import product4 from '../../public/images/product4.jpg';
import { ArrowRight } from 'lucide-react';

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Online UPS",
      description: "Provides uninterrupted power supply with zero transfer time, protecting sensitive electronics from power fluctuations. Ideal for computers, servers, and critical equipment requiring continuous power.",
      image: product1,
      features: ["Pure Sine Wave Output", "Automatic Voltage Regulation", "Battery Management System", "Smart LCD Display"]
    },
    {
      id: 2,
      name: "Inverter",
      description: "Converts DC power from batteries to AC power for your home appliances during outages. Energy-efficient solution with quick switching capability to keep essential devices running.",
      image: product2,
      features: ["High Efficiency Conversion", "Overload Protection", "Low Battery Alarm", "Multiple AC Outlets"]
    },
    {
      id: 3,
      name: "Automatic Voltage Regulator",
      description: "Stabilizes inconsistent voltage from utility power to deliver consistent power to your equipment. Protects devices from dangerous voltage spikes and drops.",
      image: product3,
      features: ["Wide Input Voltage Range", "Fast Response Time", "Surge Protection", "Digital Display"]
    },
    {
      id: 4,
      name: "Battery",
      description: "Long-lasting, maintenance-free batteries designed for power backup systems. High capacity cells ensure extended runtime for your critical systems during power outages.",
      image: product4,
      features: ["Deep Cycle Technology", "Leak-proof Design", "Long Service Life", "High Discharge Rate"]
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="xl:container xl:mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Premium Power Solutions</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Reliable power backup solutions for homes and businesses to ensure uninterrupted power supply.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                  {product.name}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-textColor mb-4 flex-grow">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mt-2 mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="mt-auto">
                  <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md w-full transition-colors duration-300 group">
                    <span>Learn More</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}