import React from 'react';
import Particle from './Particle';
import TextEffect from './TextShiny';
import Image from 'next/image';
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';

function Hero() {
    return (
    <div id='hero' className='width-full h-auto lg:h-screen flex items-center justify-center bg-neutral-900 overflow-hidden relative'>
      <div className="absolute inset-0 z-0">
      {/* Particles as background */}
        <Particle />
      </div>
      <div className='relative z-10 w-[90%] md:w-[70%] my-[6rem] md:my-2rem grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
        {/* Left container */}
        <div className='min-w-[50%] mx-[0.8rem] md:mx-auto gap-4 relative z-10'>
          <div>
            <h1 className='text-[1.7rem] md:text-[2.7rem] text-gray-300 mb-[1rem] '>
                Hola! Soy <span className='text-gray-100'>Emanuel Campos.</span>
            </h1>
            <TextEffect>
                <h1 className='text-[1.4rem] md:text-[1.7rem] '>Desarrollador web, diseñador UI/UX y programador.</h1>
            </TextEffect>
            <p className='mt-[1.5rem] text-[20px] text-stone-400 text-justify lg:max-w-[90%] '>
            Bienvenido a mi portafolio digital. Aquí encontrarás una muestra de mis proyectos más destacados en el ámbito informático, a través de cada trabajo, podrás ver mi crecimiento como desarrollador y mi búsqueda constante de innovación.
            </p>
            {/* Call to action buttons */}
            <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                <a href="https://drive.google.com/file/d/1I1u8EPE-11Pu1hMFIgahbm3qkbJK2veF/view?usp=drive_link">
                    <button className='cursor-pointer px-[2rem] hover:bg-[#e27231] transition-all duration-200 py-[1rem] text-[15px] md:text-[18px] uppercase bg-gray-400 text-black flex items-center space-x-2 rounded-full'
                    >
                        <p>
                            Descargar  CV
                        </p>
                        <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
                    </button>
                </a>
                {/*
                <button className='flex items-center space-x-2'>
                    <PlayCircleIcon className='w-[4rem] h-[4rem] hover:text-red-700 transition-all duration-200 text-gray-400'/>
                    <p className='text-[20px] text-white'>
                        Watch the video
                    </p>
                </button>
                */}
            </div>
          </div>
        </div>
        {/* Right container */}
        <div className='width-[50%] '>
          <div
          className='w-[500px] hidden bg-black relative lg:flex object-fill rounded-full h-[500px] ml-auto'>
              <Image src="/images/profile.png"
              alt="user" 
              width={500}
              height={500}
              className='object-cover rounded-full'/>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Hero;