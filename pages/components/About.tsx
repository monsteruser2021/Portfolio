"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div
      id="about"
      className="bg-gradient-to-b from-neutral-900 to-neutral-800 w-full pb-[3rem] pt-[4rem] md:pt-[8rem]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-[30px] uppercase font-semibold text-red-700 mb-[1rem]">
            About Me
          </h1>
          <h2 className="text-[30px] md:text-[35px] lg:text-[40px] leading-[2rem] md:leading-[3rem] capitalize mb-[3rem] text-white">
            Creative thinking,{' '}
            <span className="text-gray-300">innovative solutions</span>
          </h2>
          <p className="text-[19px] text-slate-300">
            Innovation is my driving force. I enjoy the process of coming up
            with creative solutions to everyday problems. My approach is based
            on critical thinking and problem solving, which allows me to find
            unique perspectives and develop efficient solutions. I believe that
            technology should be a tool to drive creativity and generate
            positive change.
          </p>
          {/*<motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-[2rem] py-[1rem] mt-[2rem] text-[18px] uppercase bg-gray-400 text-black flex items-center space-x-2 rounded-lg hover:bg-red-700 transition-all duration-300"
          >
            <p className="group-hover:text-white transition-all duration-300">
              Learn More
            </p>
            <ArrowRightIcon className="w-[1.6rem] h-[1.7rem] text-black group-hover:text-white transition-all duration-300" />
          </motion.button>*/}
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-[500px] lg:h-[500px] mx-auto mt-[2rem] relative"
        >
          <Image
            src="./images/about.jpeg"
            alt="user"
            width={500}
            height={500}
            objectFit="cover"
            className="relative z-20 w-[100%] h-[100%] rounded-lg shadow-lg"
          />
          <div className="absolute w-[100%] h-[100%] z-10 bg-zinc-500 top-[1.5rem] left-[1.5rem] rounded-lg blur-md"></div>
          {/**<div className="absolute w-[100%] h-[100%] z-0 bg-zinc-800 top-[2rem] left-[2rem] rounded-lg"></div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default About;