import { CodeBracketIcon, Cog8ToothIcon, CommandLineIcon, ComputerDesktopIcon, PaintBrushIcon, ServerStackIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Services = () => {
  return (
    <div
    id='services'
    className='bg-neutral-900 pt-[4rem] md:pt-[8rem] pb-[5rem]'>
        <p className='heading'>My<span className='text-gray-100'>Services</span>
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
          <div data-aos="fade-right">
            <div className='bg-slate-600 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase text-center p-[2rem] border-[5px] border-gray-200 rounded-lg'>
              <PaintBrushIcon className='w-[6rem] h-[6rem] mx-auto text-gray-100'/>
              <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Front-end</h1>
              <p className='text-[13px] text-gray-100'>
              I create exceptional user experiences through attractive and functional front-end interfaces. I use the latest technologies to build custom and responsive interfaces that adapt to any device.
              </p>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-delay="300">
            <div className='bg-slate-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase text-center p-[2rem] border-[5px] border-gray-200 rounded-lg'>
              <ServerStackIcon className='w-[6rem] h-[6rem] mx-auto text-gray-100'/>
              <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Back-end</h1>
              <p className='text-[13px] text-gray-100'>
              I build the solid foundation of your web applications with a robust and scalable backend. I use frameworks to develop efficient APIs and manage databases securely.
              </p>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay="500">
            <div className='bg-slate-800 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase text-center p-[2rem] border-[5px] border-gray-200 rounded-lg'>
              <Cog8ToothIcon className='w-[6rem] h-[6rem] mx-auto text-gray-100'/>
              <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Others</h1>
              <p className='text-[13px] text-gray-100'>
              I also offer a wide range of services including: Design for the creation of intuitive and attractive designs, advice on the choice of technologies and ongoing maintenance of your applications.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Services
