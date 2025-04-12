import React from 'react'
import teamIcon from '../../public/images/icon/1740298247_image1.svg'
import customericon from '../../public/images/icon/1740298247_image2.svg'
import pricingicon from '../../public/images/icon/1740560522_image3.svg'

const BannerBottom = () => {
    const bannerBottomData = [
        {
            "id" : "1",
            "title" : "Highly Expert Team",
            "content" : "We provide the most responsive and functional power service",
            "image" : teamIcon
        },
        {
            "id" : "2",
            "title" : "24/7 Customer Service",
            "content" : "We provide the most responsive and functional Qumod",
            "image" : customericon
        },
        {
            "id" : "3",
            "title" : "Competitive Pricing",
            "content" : "We provide the most responsive and functional Qum",
            "image" : pricingicon
        }
    ]
  return (
    <>
    <section className='py-10'>
        <div className='xl:container xl:mx-auto px-2 p-2'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-4 xl:gap-8 w-full'>
                {bannerBottomData.map((item, index) => (
                    <div key={index} className='flex items-center gap-5'>
                        <img className='bg-gray-200 p-2 w-16 h-16 md:w-20 md:h-20 object-cover rounded-md' src={item?.image} alt={item?.title} />
                        <div className='space-y-2'>
                            <h2 className='text-headingColor font-bold text-xl'> {item?.title} </h2>
                            <p className='text-textColor text-sm md:text-base'> {item?.content} </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    </>
  )
}

export default BannerBottom