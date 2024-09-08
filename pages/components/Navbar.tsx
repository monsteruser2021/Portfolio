import { Bars3BottomRightIcon } from '@heroicons/react/16/solid'

interface Props {
    openNav: () => void;
}

const Navbar = ({openNav}:Props) => {

  return <div className='w-[100%] fixed z-[10000] top-0 h-[12vh] bg-stone-950 shadow-md'>
    <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
        <h1 className='flex-[0.6] cursor-pointer text-[40px] text-white'>
            Web 
            <span className='text-red-700'>Dev</span>
        </h1>
        <div className='nav-link'>
            <a href="#hero">HOME</a>
        </div>
        <div className='nav-link'>
            <a href="#about">ABOUT</a>
        </div>
        <div className='nav-link'>
            <a href="#services">SERVICES</a>
        </div>
        <div className='nav-link'>
            <a href="#skills">SKILLS</a>
        </div>
        <div className='nav-link'>
            <a href="#projects">PROJECTS</a>
        </div>
        <div className='nav-link'>
            <a href="#contact">CONTACT</a>
        </div>
        <div onClick={openNav}>
            <Bars3BottomRightIcon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-red-800'/>
        </div>
    </div>
  </div>
}

export default Navbar
