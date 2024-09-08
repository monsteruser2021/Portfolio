import React from 'react';
import Particle from './Particle';
import TextEffect from './TextEffect';
import Image from 'next/image';
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';
import { PlayCircleIcon } from '@heroicons/react/20/solid';


function Hero() {
    return (
        <div 
        id='hero'
        className="h-[88vh] mt-[12vh] bg-neutral-900">
            <Particle/>
            <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
                <div>
                    <h1 className='text-[40px] md:text[50px] text-white'>
                        Hi, I&apos;m <span className='text-red-700'>MonsterUser!</span>
                    </h1>
                    <TextEffect/>
                    <p className='mt-[1.5rem] text-[20px] text-stone-300'>
                    Welcome to my digital portfolio. Here you will find a sample of my most outstanding projects in the IT field, through each work, you can see my growth as a developer and my constant search for innovation.
                    </p>
                    <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                        <a href="https://drive.google.com/file/d/1prr-pwDrBLxFl-7_9_qHyhH5uuR4Xs3L/view?usp=drive_link">
                            <button className='px-[2rem] hover:bg-red-800 transition-all duration-200 py-[1rem] text-[18px] uppercase bg-gray-400 text-black flex items-center space-x-2 rounded-full'>
                                <p>
                                    Download CV
                                </p>
                                <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
                            </button>
                        </a>
                        <button className='flex items-center space-x-2'>
                            <PlayCircleIcon className='w-[4rem] h-[4rem] hover:text-red-700 transition-all duration-200 text-gray-400'/>
                            <p className='text-[20px] text-white'>
                                Watch the video
                            </p>
                        </button>
                    </div>
                </div>
                <div
                className='w-[500px] hidden bg-red-950 relative lg:flex items-center rounded-full h-[500px]'>
                    <Image src="./images/profile.jpeg"
                    alt="user" 
                    layout='fill' 
                    className='object-cover rounded-full'/>
                </div>
            </div>
        </div>
    );
}

export default Hero
