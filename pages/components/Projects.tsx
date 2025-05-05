import React from 'react';

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
      <div className="card h-[70%] md:h-[400px] w-[30%] md:w-[300px] bg-[#130000] border border-[#ececec] font-mono text-sm overflow-hidden mx-auto hover:scale-105 transition-transform duration-200 flex flex-col">
        {/* Title Bar */}
        <div className="titlebar font-sans text-lg font-medium bg-[#2c2c2c] w-full text-right">
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
        <div className="flex flex-col justify-between h-full p-4">
          {/* Image */}
          <div className="image h-[45%] mb-4">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          {/* Text */}
          <div className="text text-left flex flex-col justify-end mt-4 mb-[2rem]">
            <h3 className="text-red-700 mb-2 text-lg font-bold">{title}</h3>
            <p className="text-gray-200 text-sm mb-4">{description}</p>
            {/* Preview Button */}
            <button
              onClick={handlePreviewClick}
              className="bg-red-800 text-white py-1 px-2 rounded-md hover:bg-red-700 transition-colors duration-200 self-start"
            >
              Preview
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Data for the cards
  const cards = [
    {
      imageSrc: '/images/p1.png',
      title: 'Project 1',
      description: 'This is a description of the first project.',
      previewLink: 'https://example.com/project1',
    },
    {
      imageSrc: '/images/p1.png',
      title: 'Project 2',
      description: 'This is a description of the second project.',
      previewLink: 'https://example.com/project2',
    },
    {
      imageSrc: '/images/p1.png',
      title: 'Project 3',
      description: 'This is a description of the third project.',
      previewLink: 'https://example.com/project3',
    },
  ];

  return (
    <div id="projects" className="bg-neutral-900 w-full pt-[4rem] md:pt-[8rem] pb-[4rem]">
      <h1 className="heading text-center text-gray-200 text-[2rem] font-bold mb-[4rem]">
        Pro<span className="text-red-700">jects</span>
      </h1>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {cards.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            previewLink={card.previewLink}
          />
        ))}
      </div>
      {/* See All Button */}
      <div className="text-center mt-[6rem]">
        <a
          href="#"
          className="inline-block px-6 py-2 text-lg font-semibold text-white bg-red-800 rounded-md hover:bg-red-700 transition-colors duration-200 scale-105"
        >
          See All
        </a>
      </div>
    </div>
  );
};

export default Projects;