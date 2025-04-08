import React from "react";
import aboutUs from '../../public/images/about.jpg';

const About = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="xl:container xl:mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 translate-x-1/4 translate-y-1/4"></div>
        
        {/* Title section with animated underline */}
        <div className="text-center mb-16 relative z-10">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl font-bold text-headingColor tracking-wide">
              About Us
            </h2>
            <div className="h-1 w-1/2 bg-blue-600 mt-2 mx-auto rounded-full"></div>
          </div>
          <p className="max-w-xl mx-auto mt-6 text-gray-700 text-sm md:text-base leading-relaxed">
            We provide premium power backup & voltage control systems with exceptional after-sales service. 
            Our team is dedicated to delivering the best solutions for your power needs, available every day.
          </p>
        </div>

        {/* Main content section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image with hover effect and overlay */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src={aboutUs}
              alt="Sagen Power team and facilities"
              className="w-full h-full object-cover object-center rounded-xl transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-lg font-medium">Building reliable power solutions since 2010</p>
            </div>
          </div>

          {/* Right: Content with visually appealing structure */}
          <div className="space-y-8">
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-bold text-headingColor inline-block">
                Sagen Power
              </h3>
              <div className="h-1 w-16 bg-blue-600 mt-2"></div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="ml-3 text-gray-700 leading-relaxed">
                  We deliver premium power backup and voltage control systems engineered to provide reliable performance 
                  even in the most challenging environments.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="ml-3 text-gray-700 leading-relaxed">
                  Our comprehensive after-sales service ensures your systems maintain peak performance throughout their lifecycle,
                  with rapid response times and expert technical support.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="ml-3 text-gray-700 leading-relaxed">
                  Our team of certified engineers and technicians brings decades of combined experience in power solutions,
                  backed by ongoing training and the latest industry certifications.
                </p>
              </div>
            </div>
            
            {/* Stats with highlights */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-6 border-t border-b border-gray-200">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">15+</p>
                <p className="text-sm text-gray-600 mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">5,000+</p>
                <p className="text-sm text-gray-600 mt-1">Projects Completed</p>
              </div>
              <div className="text-center sm:col-span-1 col-span-2">
                <p className="text-3xl font-bold text-blue-600">24/7</p>
                <p className="text-sm text-gray-600 mt-1">Customer Support</p>
              </div>
            </div> */}

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-6">
              <a href="/services" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 text-center shadow-md hover:shadow-lg">
                Our Services
              </a>
              <a href="/contact" className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors duration-300 text-center">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        
        {/* Additional testimonial or certification section */}
        {/* <div className="mt-20 bg-white rounded-xl shadow-lg p-6 sm:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-10">
              <h4 className="text-xl font-semibold text-headingColor mb-2">Trusted by Industry Leaders</h4>
              <p className="text-gray-600">
                Our power solutions are trusted by leading organizations across industries,
                from healthcare and manufacturing to telecommunications and data centers.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">

              {[1, 2, 3].map((item) => (
                <div key={item} className="h-12 bg-gray-100 rounded-md flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Partner {item}</span>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        
      </div>
    </section>
  );
};

export default About;