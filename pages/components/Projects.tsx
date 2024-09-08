import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div
    id='projects'
    className='bg-neutral-900 pt-[4rem] md:pt-[8rem] pb-[4rem]'>
      <h1 className='heading'>
        Pro<span className='text-gray-200'>jects</span>
      </h1>
      <div className='w-[80%] pt-[2rem] pb-[4rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
        <div data-aos="fade-up">
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                <Image 
                src='./images/p1.jpg'
                alt='portfolio'
                layout='fill'
                className='object-contain'
                />
            </div>
            <span className='text-center block text-gray-200 text-[20px] uppercase bg-neutral-700 border-[3px] border-red-800 rounded-lg '>
                First Steps
            </span>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                <Image 
                src='./images/p2.jpg'
                alt='portfolio'
                layout='fill'
                className='object-contain'
                />
            </div>
            <span className='text-center block text-gray-200 text-[20px] uppercase bg-neutral-700 border-[3px] border-red-800 rounded-lg '>
                c++ inventory
            </span>
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                <Image 
                src='./images/p3.jpg'
                alt='portfolio'
                layout='fill'
                className='object-contain'
                />
            </div>
            <span className='text-center block text-gray-200 text-[20px] uppercase bg-neutral-700 border-[3px] border-red-800 rounded-lg '>
                Flyin&apos; Books
            </span>
        </div>
      </div>
    </div>
  )
}

export default Projects
