import React, { useState } from 'react'
import Navbar from './components/Navbar'
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const HomePage = () => {
  const [nav,setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div>
      <MobileNav nav={nav} closeNav={closeNav}/>
      <Navbar openNav={openNav}/>
      <Hero/>
      <div className='relative z-30'>
        <About/>
        <Services/>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
    </div>
  )
}

export default HomePage