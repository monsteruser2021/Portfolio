import { XCircleIcon } from '@heroicons/react/16/solid';
import React from 'react';

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav = ({nav, closeNav}:Props) => {

    const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]"; 

  return (
    <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-stone-950`}>
      <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
      <div className='nav-link-mobile'>
      <a href="#hero">HOME</a>
        </div>
        <div
        onClick={closeNav} 
        className='nav-link-mobile'>
        <a href="#about">ABOUT</a>
        </div>
        <div
        onClick={closeNav} 
        className='nav-link-mobile'>
        <a href="#services">SERVICES</a>
        </div>
        <div
        onClick={closeNav} 
        className='nav-link-mobile'>
        <a href="#skills">SKILLS</a>
        </div>
        <div
        onClick={closeNav}
        className='nav-link-mobile'>
        <a href="#projects">PROJECTS</a>
        </div>
        <div 
        onClick={closeNav} 
        className='nav-link-mobile'>
        <a href="#contact">CONTACT</a>
        </div>
      </div>
      <div onClick={closeNav} 
      className='absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-red-800'>
        <XCircleIcon/>
      </div>
    </div>
  )
}

export default MobileNav
