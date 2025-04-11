import React from 'react'

import happyClient from '../../public/images/icon/1.svg'
import finished from '../../public/images/icon/2.svg'
import skilled from '../../public/images/icon/3.svg'
import satisfication from "../../public/images/icon/4.svg";
import caverageArea from '../../public/images/icon/coverage.png'
import technician from '../../public/images/icon/technician.png'

const ClientsCounts = () => {
  return (
    <>
    <div className='xl:container xl:mx-auto px-2 pt-20 py-10 grid md:grid-cols-2 xl:grid-cols-4 gap-4'>

        <div className='flex items-center justify-start gap-4'>
            <img src={finished} alt="finished" className='text-xs bg-gray-100 w-16 md:w-20 h-16 md:h-20 p-4 rounded-md' />
            <div>
                <h2 className='text-2xl md:text-3xl font-semibold text-headingColor'>5K</h2>
                <span className='text-textColor text-base'>Project completed</span>
            </div>
        </div>

        <div className='flex items-center justify-start gap-4'>
            <img src={caverageArea} alt="caverageArea" className='text-xs bg-gray-100 w-16 md:w-20 h-16 md:h-20 p-4 rounded-md' />
            <div>
                <h2 className='text-2xl md:text-3xl font-semibold text-headingColor'>100+</h2>
                <span className='text-textColor text-base'>Coverage Areas</span>
            </div>
        </div>

        <div className='flex items-center justify-start gap-4'>
            <img src={skilled} alt="skilled" className='text-xs bg-gray-100 w-16 md:w-20 h-16 md:h-20 p-4 rounded-md' />
            <div>
                <h2 className='text-2xl md:text-3xl font-semibold text-headingColor'>3K</h2>
                <span className='text-textColor text-base'>Satisfied customer</span>
            </div>
        </div>

        <div className='flex items-center justify-start gap-4'>
            <img src={technician} alt="technician" className='text-xs bg-gray-100 w-16 md:w-20 h-16 md:h-20 p-4 rounded-md' />
            <div>
                <h2 className='text-2xl md:text-3xl font-semibold text-headingColor'>60</h2>
                <span className='text-textColor text-base'>Certificad technician</span>
            </div>
        </div>

    </div>
    </>
  )
}

export default ClientsCounts