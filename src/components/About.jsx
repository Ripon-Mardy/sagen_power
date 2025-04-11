import React from 'react'
import { Link } from 'react-router-dom';

import about1 from '../../public/images/aboutUs/1.jpeg'
import about2 from "../../public/images/aboutUs/2.jpeg";


import { Check } from 'lucide-react';

const About = () => {
  const aboutPhoto = [about1,about2]
  return (
    <>
    <section>
      <div className='xl:container xl:mx-auto px-2 py-10 pt-32 grid grid-cols-1 md:grid-cols-2 gap-5'>
        {/* left side  */}
        <div className='grid grid-cols-2 gap-3'>
          {aboutPhoto.map((photo, index) => (
            <div key={index}>
              <img src={photo} alt="about us" className='text-xs w-full h-full object-cover rounded-md' />
            </div>
          ))}
        </div>
        {/* right side  */}
        <div className='space-y-6 md:mt-10'>
          <h2 className='text-3xl md:text-4xl font-bold text-headingColor'>Exclusive technology to provide power solutions</h2>
          <p className='text-justify text-textColor text-base'>Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only a few clicks. Each demo built with Teba will look different.</p>
          <div className='space-y-3 mb-4 text-headingColor font-semibold text-base'>
            <span className='flex items-center gap-2'> <Check/> Easily Build Custom Reports And Dashboards </span>
            <span className='flex items-center gap-2'><Check/> Legacy Software Modernization </span>
            <span className='flex items-center gap-2'><Check/> Software For The Open Enterprise </span>
          </div>
          <Link to={'/contact'} className='inline-block bg-buttonBg hover:bg-buttonBgHover py-3 text-white px-3 rounded-md text-base font-semibold'>More About Us</Link>
        </div>

      </div>
    </section>


    </>
  )
}

export default About