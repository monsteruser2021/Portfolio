import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Projects: React.FC = () => {
  // Reusable Card Component
  const Card: React.FC<{ imageSrc: string; title: string; description: string; previewLink: string }> = ({
    imageSrc,
    title,
    description,
    previewLink,
  }) => {
    const handlePreviewClick = () => {
      window.open(previewLink, '_blank', 'noopener,noreferrer');
    };

    return (
      <div className="w-full max-w-[350px] bg-[#130000] border border-[#ececec] hover:border-[#e27231] hover:-translate-y-2.5 transition-all duration-300 rounded-lg text-sm overflow-hidden mx-auto flex flex-col h-full">
        {/* Title Bar */}
        <div className="titlebar text-lg font-medium bg-[#2c2c2c] w-full text-right">
          <span className="buttons flex justify-end space-x-1">
            <button className="minimize w-[40px] h-[35px] -ml-[5px] bg-transparent hover:bg-[#444444]">
              <svg x="0px" y="0px" viewBox="0 0 10.2 1" className="w-2.5 h-2.5 mx-auto">
                <rect x="0" y="50%" width="10.2" height="1" className="fill-white"></rect>
              </svg>
            </button>
            <button className="maximize w-[40px] h-[35px] -ml-[5px] bg-transparent hover:bg-[#444444]">
              <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 mx-auto">
                <path
                  d="M0,0v10h10V0H0z M9,9H1V1h8V9z"
                  className="fill-white"
                ></path>
              </svg>
            </button>
            <button className="close w-[40px] h-[35px] -ml-[5px] bg-transparent hover:bg-[#e81123]">
              <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 mx-auto">
                <polygon
                  points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"
                  className="fill-white"
                ></polygon>
              </svg>
            </button>
          </span>
        </div>

        {/* Content Area */}
        <div className="flex flex-col flex-1 p-4">
          {/* Image */}
          <div className="image h-[140px] md:h-[150px] mb-4">
            <Image
              src={imageSrc}
              alt={title}
              width={350}
              height={150}
              className="w-full h-full object-cover rounded-md"
              style={{ objectFit: 'cover' }}
            />
          </div>
          {/* Text and Button */}
          <div className="flex flex-col flex-1 justify-between">
            <div>
              <h3 className="text-gray-100 mb-2 text-lg font-bold">{title}</h3>
              <p className="text-gray-300 text-sm mb-4 break-words">{description}</p>
            </div>
            <button
              onClick={handlePreviewClick}
              className="bg-[#e84624] text-white py-1 px-2 rounded-md hover:bg-[#e27231] hover:scale-95 transition-colors duration-200 self-start"
            >
              Ver proyecto
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Data for the cards
  const cards = [
    {
      imageSrc: '/images/p3.png',
      title: 'Página web para estilista profesional',
      description: 'Este proyecto es el desarrollo de un sitio web profesional diseñado específicamente para un estilista, funcionando como un portafolio digital inmersivo.',
      previewLink: 'https://ruxstylist.netlify.app/',
    },
    {
      imageSrc: '/images/p0.png',
      title: 'Diseño de UI/UX para página web de productos personalizados (móviles)',
      description: 'El proyecto se centró en la creación de una experiencia intuitiva y visualmente atractiva. Se destacan las habilidades en la navegación guiada y presentación clara de opciones.',
      previewLink: 'https://example.com/project2',
    },
    {
      imageSrc: '/images/p1.png',
      title: 'Diseño de UI/UX para aplicación de ferias de negocios',
      description: 'Este proyecto muestra el diseño UI/UX de una aplicación web para ferias de negocios, concebida para mejorar la experiencia de expositores y visitantes.',
      previewLink: '#',
    },
  ];

  return (
    <div id="projects" className="bg-zinc-900 md:bg-zinc-800 w-full pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <h1 className="heading text-center mb-[4rem]">
        Proyectos<span className=" text-gray-100 "> destacados</span>
      </h1>
      <div className="w-[75%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2.5rem] place-items-stretch">
        {cards.map((card, index) => (
          <div className="flex h-full items-stretch" key={index}>
            <Card
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
              previewLink={card.previewLink}
            />
          </div>
        ))}
      </div>
      {/* See All Button */}
      <div className="text-center mt-[6rem]">
        <Link
          href="/Gallery/Gallery"
          className="inline-block px-6 py-2 text-lg font-semibold text-white bg-zinc-900 rounded-md hover:bg-zinc-700 transition-colors duration-200 scale-105 border border-gray-100 "
        >
          Ver todos los proyectos
        </Link>
      </div>
    </div>
  );
};

export default Projects;