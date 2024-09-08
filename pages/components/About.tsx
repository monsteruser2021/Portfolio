import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import React from 'react'

const About = () => {
  return (
    <div
    id='about'
    className='bg-neutral-800 pb-[3rem] pt-[4rem] md:pt-[8rem]'>
        <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
            <div>
                <h1 className='text-[30px] uppercase text-red-700 mb-[1rem]'>ABOUT ME</h1>
                <h2 className='text-[30px] md:text-[35px] lg:text-[40px] leading-[2rem] md:leading-[3rem] capitalize mb-[3rem] text-white'>
                Creative thinking,  <span className='text-gray-300'>innovative solutions</span>
                </h2>
                <div className='mb-[3rem] flex items-center md:space-x-10'>
                  <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
                  <p className='text-[19px] text-slate-300 w-[80%]'>Innovation is my driving force. I enjoy the process of coming up with creative solutions to everyday problems. My approach is based on critical thinking and problem solving, which allows me to find unique perspectives and develop efficient solutions. I believe that technology should be a tool to drive creativity and generate positive change.</p>
                </div>
                <button className='px-[2rem] hover:bg-red-700 transition-all duration-200 py-[1rem] text-[18px] uppercase bg-gray-400 text-black flex items-center space-x-2 rounded-lg'>
                  <p>Learn More</p>
                  <ArrowRightIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
                </button>
            </div>
            <div
            data-aos="fade-up-left"
            className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
              <Image src="/images/about.jpeg"
              alt='user' 
              layout='fill' 
              objectFit='contain, cover' 
              className='relative z-[11] w-[100%] h-[100%] rounded-lg'
              />
              <div className='absolute w-[100%] h-[100%] z-[10] bg-zinc-900 top-[-2rem] right-[-2rem] rounded-lg'>

              </div>
            </div>
        </div>
    </div>
  )
}

export default About