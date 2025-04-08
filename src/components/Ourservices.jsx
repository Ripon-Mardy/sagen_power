import React from "react";
import serviceData from "./data/ServiceData";

const Ourservices = () => {
  return (
    <>
      <section className="xl:container xl:mx-auto px-2 pt-20 py-20">
        {/* <h2 className='text-center  text-4xl font-bold text-headingColor'>Our Services</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 items-center justify-center">
          <h2 className="text-center font-bold text-headingColor text-4xl">
            What We Do
          </h2>
          <div>
            <h2 className="text-3xl font-bold text-headingColor mb-4">
              Sagen Power
            </h2>
            <p className="text-textColor leading-7 md:text-base text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              velit eum quae recusandae, commodi, molestiae, quasi quis
              provident ipsa perspiciatis eveniet sit. Et dignissimos assumenda
              perferendis esse maiores, nemo consectetur quae. Doloremque porro
              asperiores, officiis repellat molestias voluptates molestiae id!
            </p>
          </div>
        </div>

        {/* services  */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start justify-start gap-4 bg-gray-50 p-2 py-5 border border-gray-200 rounded-md"
            >
              <img
                src={item?.image}
                alt={item?.name}
                className="w-52 h-40 object-cover"
              />
              <div>
                <h2 className="bg-buttonBg w-fit px-5 rounded-md text-white py-1 mb-3 text-base">
                  {item?.name}
                </h2>
                <p className="text-textColor text-sm leading-6 text-justify px-2">
                  {item?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </section>
    </>
  );
};

export default Ourservices;
