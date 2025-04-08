
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import product1 from "../../public/images/product1.jpg";
import product2 from "../../public/images/product2.jpg";
import product3 from "../../public/images/product3.jpg";
import product4 from "../../public/images/product4.jpg";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const bannerImageData = [
    {
      src: product1,
      alt: "Sagen Power Product 1",
      delay: 0.1,
    },
    {
      src: product2,
      alt: "Sagen Power Product 2",
      delay: 0.2,
    },
    {
      src: product3,
      alt: "Sagen Power Product 3",
      delay: 0.3,
    },
    {
      src: product4,
      alt: "Sagen Power Product 4",
      delay: 0.4,
    },
  ];

  return (
    <section className="w-full relative py-12 md:py-16 lg:py-20 xl:pt-32 overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-vector/ombre-blue-curve-light-blue-background_53876-173299.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left: Text Content */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-headingColor leading-tight">
              Sagen Power
            </h1>
            <p className="mt-4 text-textColor max-w-md mx-auto lg:mx-0">
              Provide Extra power backup & Voltage Control system. We ensure the
              quality after sales and service give you top solution. Everyday open.
            </p>
            <motion.button 
              className="mt-6 bg-buttonBg hover:bg-buttonBgHover text-white px-6 py-3 rounded-full font-medium transition duration-300 transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Details
            </motion.button>
          </motion.div>

          {/* Right: Image Grid */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
              {bannerImageData.map((image, index) => (
                <motion.div
                  key={index}
                  className="aspect-square relative overflow-hidden rounded-lg shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: image.delay }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover rounded-lg"
                    priority={index < 2}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}