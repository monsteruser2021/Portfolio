import React, { useState } from 'react'
import Navbar from './components/Navbar'
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import About2 from './components/About2';
import Services from './components/Services';
import Skills2 from './components/Skills2';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';

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
        <About2/>
        <Services/>
        <Skills2/>
        <Projects/>
        {/*Contact*/}
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default HomePage