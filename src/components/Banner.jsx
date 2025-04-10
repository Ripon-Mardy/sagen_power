import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import banner1 from "../../public/images/BannerImage/1.jpg";
import banner2 from "../../public/images/BannerImage/2.jpg";
import banner3 from "../../public/images/BannerImage/3.jpg";
import banner4 from "../../public/images/BannerImage/4.jpg";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const bannerImageData = [
    {
      src: banner1,
      alt: "Sagen Power Product 1",
      delay: 0.1,
    },
    {
      src: banner2,
      alt: "Sagen Power Product 2",
      delay: 0.2,
    },
    {
      src: banner3,
      alt: "Sagen Power Product 3",
      delay: 0.3,
    },
    {
      src: banner4,
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
          backgroundImage: "url('/images/BannerImage/bg1.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left: Text Content */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-white font-semibold text-lg">
              We provide professional Power services
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
              Sagen Power
            </h1>
            <p className="mt-4 text-white max-w-md mx-auto lg:mx-0">
              Provide Extra power backup & Voltage Control system. We ensure the
              quality after sales and service give you top solution. Everyday
              open.
            </p>
            <div className="space-x-4">
              <Link to={'/about'} className="text-white bg-buttonBg hover:bg-buttonBgHover py-3 px-4 rounded-md text-sm md:text-base border font-medium border-gray-700">
                Work with us
              </Link>
              <Link to={'/services'} className="bg-white text-headingColor md:text-base text-sm py-3 px-3 rounded-md font-semibold">
                View Service
              </Link>
            </div>
          </motion.div>

          {/* Right: Image Grid */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-4">
              {bannerImageData.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: image.delay }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    fill
                    // sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover rounded-lg w-full h-52"
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
