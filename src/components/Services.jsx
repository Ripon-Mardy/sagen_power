import React from 'react'
import serviceData from './data/ServiceData'

const Services = () => {
    console.log('services Data', serviceData)
  return (
    <>
    <section>
        <div className='xl:container xl:mx-auto px-2 py-10'>
            <h2 className='text-xl md:text-4xl font-semibold text-headingColor md:max-w-lg md:mx-auto text-center'>Our awesome services to give you success</h2>
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
                  <p className="text-textColor text-sm md:text-base leading-6 text-justify px-2">
                    {item?.description}
                  </p>
                </div>
              </div>
            ))}
            </div>
            

        </div>
    </section>
    </>
  )
}

export default Services