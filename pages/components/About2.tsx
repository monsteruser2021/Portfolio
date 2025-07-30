import React from 'react'
import Image from 'next/image';
import { DiCode } from 'react-icons/di';
import { FaRegLightbulb, FaMugHot } from 'react-icons/fa6';
import { FaUsers } from 'react-icons/fa';

type Card = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const aboutCards: Card[] = [
  {
    icon: <DiCode className='w-[5rem] h-[5rem] text-[#e27231] md:mb-[1rem]' />,
    title: 'Código limpio',
    description: 'Escribir código mantenible y escalable que resista el paso del tiempo.',
  },
  {
    icon: <FaRegLightbulb className='w-[3rem] h-[3rem] text-[#e27231] mb-[1rem] md:mb-[1rem]' />,
    title: 'Innovación',
    description: 'Siempre buscando nuevas formas de mejorar y optimizar mis proyectos.',
  },
  {
    icon: <FaUsers className='w-[3rem] h-[3rem] text-[#e27231] mb-[1rem] md:mb-[1rem]' />,
    title: 'Colaboraciones',
    description: 'Disfruto trabajar en equipo y aprender de otros profesionales del sector.',
  },
  {
    icon: <FaMugHot className='w-[3rem] h-[3rem] text-[#e27231] mb-[1rem] md:mb-[1rem]' />,
    title: 'Dedicación',
    description: 'Apasionado por ofrecer resultados excepcionales en cada proyecto.',
  },
];

const About2 = () => {
  return (
    <div id='about' className='bg-zinc-900 md:bg-zinc-800 w-full pb-[3rem] pt-[4rem] md:pt-[8rem]'>
      <h1 className='heading'>Acerca <span className='text-gray-100'>de mí</span></h1>
      {/*Sections */}
      <div className='w-[75%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[4rem] mt-[4rem] text-white'>
        {/*Left section */}
        <div className='min-w-[40%] mx-[0.8rem] md:mx-auto gap-4 relative z-10 '>
          <h1 className='text-[1.2rem] md:text-[1.7rem] text-gray-100 mb-[1rem] '>
            Soy un desarrollador web, diseñador UI/UX y programador.
          </h1>
          <p className='text-[1rem] md:text-[19px] text-slate-300 text-justify mb-[1.5rem]'>
          Con más de 3 años de experiencia en desarrollo web, me especializo en crear sitios web y aplicaciones modernos, adaptables y fáciles de usar. Mi trayectoria comenzó con la curiosidad por saber cómo funcionan las cosas en la web, y ha evolucionado hasta convertirse en una pasión por crear soluciones digitales que resuelvan problemas del mundo real.
          </p>
          <p className='text-[1rem] md:text-[19px] text-slate-300 text-justify'>
            Creo en el poder del código limpio, el diseño intuitivo y las experiencias de usuario fluidas. Cada proyecto es una oportunidad para aprender algo nuevo y ampliar los límites de lo que es posible en la web.
          </p>
          {/**list */}
          <h2 className='text-[1.2rem] md:text-[1.7rem] text-gray-100 mt-[2rem] mb-[1rem]'>
            Mis habilidades incluyen:
          </h2>
          <ul className='list-disc mt-[1.5rem] text-[1rem] md:text-[19px] text-slate-300'>
            <li className='mb-1'>Desarrollo web moderno y adaptable.</li>
            <li className='mb-1'>Diseño UI/UX centrado en el usuario.</li>
            <li className='mb-1'>Programación eficiente y escalable.</li>
            <li className='mb-1'>Pasión por la innovación y la mejora continua.</li>
          </ul>
        </div>
        {/*Right section */}
        <div className='w-[500px] hidden bg-red-950 relative lg:flex object-fill rounded-full h-[500px] ml-auto'>
          <Image
            src="./images/about.jpeg"
            alt="user"
            className='object-cover rounded-lg w-[100%] h-[100%] shadow-[10px_10px_20px_rgba(145,145,145,0.8)]'
            width={500}
            height={500}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      {/*Below section */}
      <div className='w-[75%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-[1rem] md:gap-[4rem] mt-[1rem] md:mt-[4rem] text-white'>
        {aboutCards.map((card) => (
          <div
            key={card.title}
            className='flex flex-col items-center justify-center text-center md:h-auto bg-zinc-700 hover:bg-zinc-600 p-[1rem] md:p-[2rem] rounded-lg shadow-lg hover:translate-y-2.5 transition-all duration-300'
          >
            {card.icon}
            <h3 className='text-[1rem] md:text-[1.5rem] text-gray-100 mb-[0.5rem]'>{card.title}</h3>
            <p className='text-[1rem] text-slate-300 hidden md:block'>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About2