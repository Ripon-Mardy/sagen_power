import React from 'react'
import { Link } from 'react-router-dom'
import workBanner from '/images/BannerImage/bg1.webp'

const WorkTogether = () => {
  return (
    <>
    <section style={{backgroundImage: `url(${workBanner})`}}>
        <div className='xl:container xl:mx-auto px-2 py-20 flex items-center justify-center flex-col space-y-5 md:max-w-2xl text-center'>
            <h2 className='text-white font-bold text-xl md:text-5xl'>Let’s work together</h2>
            <p className='text-white md:text-base text-sm'>Each demo built with Teba will look different. You can customize anything appearance of your website with only a few clicks</p>
            <Link to={'/contact'} className='bg-white text-headingColor font-semibold py-3 md:text-base text-sm rounded-md px-3'>Let's Start a Project</Link>
        </div>
    </section>
    </>
  )
}

export default WorkTogether