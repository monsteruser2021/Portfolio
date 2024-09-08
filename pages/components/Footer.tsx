import { DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Footer = () => {
  return (
    <div
    id='contact'
    className='pt-[8rem] pb-[4rem] bg-neutral-800 '>
      <div className='grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] '>
        <div className='flex items-center space-x-6'>
            <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-red-800 '>
                <MapPinIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black '/>
            </div>
            <div>
                <h1 className='text-[25px] mb-[0.2rem] text-gray-200 '>
                    Address
                </h1>
                <p className='text-[17px] w-[90%] text-gray-200 opacity-60 '>
                    Caracas, VE
                </p>
            </div>
        </div>
        <div className='flex items-center space-x-6'>
            <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-red-800 '>
                <a href="https://wa.me/584126338516">
                <DevicePhoneMobileIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black '/>
                </a>
            </div>
            <div>
                <h1 className='text-[25px] mb-[0.2rem] text-gray-200 '>
                    Phone
                </h1>
                <p className='text-[17px] w-[90%] text-gray-200 opacity-60 '>
                    +58 412 633 85 16
                </p>
            </div>
        </div>
        <div className='flex items-center space-x-6'>
            <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-red-800 '>
                <a href="mailto:monsteruser2021@gmail.com">
                <EnvelopeIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black '/>
                </a>
            </div>
            <div>
                <h1 className='text-[25px] mb-[0.2rem] text-gray-200 '>
                    Send Me Email
                </h1>
                <p className='text-[17px] w-[90%] text-gray-200 opacity-60 '>
                    monsteruser2021@gmail.com
                </p>
            </div>
        </div>
      </div>
      <div className='w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between '>
        <div className='text-[16px] mb-[2rem] md:mb-0 text-gray-100 '>
            Carlos E. Servando C. // All Rights reserved.
        </div>
        <div className='flex items-center space-x-10 '>
            <p className='text-[16px] text-gray-200 '>Terms & Conditions</p>
            <p className='text-[16px] text-gray-200 '>Privacy Policy</p>
            <p className='text-[16px] text-gray-200 '>Sitemap</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
