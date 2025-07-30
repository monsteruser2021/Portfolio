import { Bars3BottomRightIcon } from '@heroicons/react/16/solid'

interface Props {
    openNav: () => void;
}

const Navbar = ({openNav}:Props) => {

  return <div className='w-full fixed z-10000 top-0 h-auto py-[0.5rem] bg-[#000]'>
    <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
        <h1 className='flex-[0.8] font-bold text-[2rem] md:text-[2.5rem] text-white'>
            Web<span className='text-[#e84624] '>Dev</span>
        </h1>
        <div className='nav-link'>
            <a href="#hero">INICIO</a>
        </div>
        <div className='nav-link'>
            <a href="#about">ACERCA DE MI</a>
        </div>
        <div className='nav-link'>
            <a href="#services">SERVICIOS</a>
        </div>
        <div className='nav-link'>
            <a href="#skills">HABILIDADES</a>
        </div>
        <div className='nav-link'>
            <a href="#projects">PROYECTOS</a>
        </div>
        <div className='nav-link'>
            <a href="#contact">CONTACTO</a>
        </div>
        <div onClick={openNav}>
            <Bars3BottomRightIcon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-[#e84624]'/>
        </div>
    </div>
  </div>
}

export default Navbar
