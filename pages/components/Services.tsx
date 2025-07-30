import React from 'react'
import { FaPalette } from 'react-icons/fa6';
import { FaCode } from 'react-icons/fa';
import { AiOutlineMobile } from 'react-icons/ai';

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
};

const services: Service[] = [
  {
    icon: <FaPalette className='w-[3rem] h-[3rem] text-[#e27231] m-[1rem]' />,
    title: 'Diseño UI/UX',
    description:
      'Creación de interfaces de usuario intuitivas y visualmente atractivas que proporcionan experiencias de usuario excepcionales.',
    features: [
      'Investigación y análisis de requisitos.',
      'Creación de wireframes y prototipos.',
      'Diseño visual y branding.',
      'Sistemas de diseño responsivo.',
    ],
  },
  {
    icon: <FaCode className='w-[3rem] h-[3rem] text-[#e27231] m-[1rem]' />,
    title: 'Desarrollo frontend',
    description:
      'Creación de aplicaciones web modernas, adaptables y de alto rendimiento utilizando tecnologías de vanguardia.',
    features: [
      'Desarrollo con React y JavaScript.',
      'Integración con TypeScript.',
      'CSS moderno y TailwindCSS.',
      'Diseño web adaptable.',
    ],
  },
  {
    icon: <AiOutlineMobile className='w-[3rem] h-[3rem] text-[#e27231] m-[1rem]' />,
    title: 'Aplicaciones web',
    description:
      'Soluciones frontend completas, desde el concepto hasta la implementación, centradas en la experiencia del usuario.',
    features: [
      'Aplicaciones de página única.',
      'Aplicaciones web progresivas.',
      'Compatibilidad entre navegadores.',
      'Optimización del rendimiento.',
    ],
  },
];

const Services = () => {
  return (
    <div id='services' className='bg-zinc-900 md:bg-zinc-800 w-full pb-[3rem] pt-[4rem] md:pt-[8rem]'>
      <h1 className='heading'>Mis <span className='text-gray-100'>servicios</span></h1>
      {/* Cards section with left icon, title, description, list */}
      <div className='w-[75%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[4rem] mt-[4rem] text-white'>
        {services.map((service) => (
          <div
            key={service.title}
            className='flex flex-col items-start justify-start text-left border-2 border-zinc-500 hover:border-[#e27231] hover:-translate-y-2.5 bg-zinc-900 p-[1rem] md:p-[2rem] rounded-lg shadow-lg transition-all duration-300'
          >
            <div className='rounded-2xl bg-[#742e00] mb-[1rem]'>
              {service.icon}
            </div>
            <h3 className='font-semibold text-[1.2rem] md:text-[1.5rem] text-[#e27231] mb-[0.5rem]'>{service.title}</h3>
            <p className='text-[1rem] text-slate-300 mb-[1rem]'>{service.description}</p>
            <ul className='list-disc text-left text-slate-300'>
              {service.features.map((feature, idx) => (
                <li key={idx} className='ml-3 mb-1'>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services