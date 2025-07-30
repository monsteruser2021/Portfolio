import { XCircleIcon } from '@heroicons/react/16/solid';
import React from 'react';

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav = ({nav, closeNav}:Props) => {

    const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]"; 

  return (
    <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-1000000 bg-[#000]`}>
      <div className='w-screen h-screen flex flex-col items-center justify-center'>
        <div className='nav-link-mobile'>
        <a href="#hero">INICIO</a>
        </div>
        <div
        onClick={closeNav}
        className='nav-link-mobile'>
        <a href="#about">ACERCA DE MI</a>
        </div>
        <div
        onClick={closeNav} 
        className='nav-link-mobile'>
        <a href="#services">SERVICIOS</a>
        </div>
        <div
        onClick={closeNav} 
        className='nav-link-mobile'>
        <a href="#sills">HABILIDADES</a>
        </div>
        <div
        onClick={closeNav} 
        className='nav-link-mobile'>
        <a href="#projects">PROYECTOS</a>
        </div>
        <div 
        onClick={closeNav} 
        className='nav-link-mobile'>
        <a href="#contact">CONTACTO</a>
        </div>
      </div>
      <div onClick={closeNav} 
      className='absolute z-100000000 cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-[#e84624] '>
        <XCircleIcon/>
      </div>
    </div>
  )
}

export default MobileNav