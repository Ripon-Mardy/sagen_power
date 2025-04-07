import React from "react";
import aboutUs from '../../public/images/about.jpg';

const About = () => {
  return (
    <>
      <section className="relative xl:container xl:mx-auto px-4 py-20 bg-gray-50">
        {/* title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-headingColor tracking-wide">
            About Us
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-gray-700 text-sm md:text-base">
            We provide extra power backup & voltage control systems. Our after-sales service ensures you get the best solutions. We're here every day to help you!
          </p>
        </div>

        {/* about */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10">
          {/* Left: Image */}
          <div className="relative w-full h-full">
            <img
              src={aboutUs}
              alt="About Us"
              className="w-full h-full object-cover rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-3xl font-semibold text-headingColor">Sagen Power</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Provide extra power backup & voltage control systems. We ensure quality after-sales service and give you top solutions. Available every day to serve you.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores vel quos, aspernatur hic voluptatibus voluptate officia facere cum saepe eaque exercitationem deleniti placeat quibusdam odio delectus earum eius, veniam ullam quaerat aliquam. Sed quo, temporibus quas corrupti laborum accusantium?
            </p>

            {/* Learn More Button */}
            <a href="/about" className="inline-block mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
