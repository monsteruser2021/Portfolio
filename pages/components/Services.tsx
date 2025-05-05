import React from "react";
import Image from "next/image";

// Reusable Card Component
type CardProps = {
  title: string;
  subtitle: string;
  highlight: string;
  imageSrc: string;
};

const Card: React.FC<CardProps> = ({ title, subtitle, highlight, imageSrc}) => {
  return (
    <div className="relative group w-[70%] sm:w-[80%] md:w-[23%] mx-[5%] my-[10%] md:my-[5%] aspect-[190/254]">
      {/* Neon shadow effect */}
      <div
        className="absolute inset-0 -m-[5px] rounded-[10px] bg-gradient-to-br from-[#ececec] to-[#b3b3b3] z-0 blur-[1rem] opacity-70 pointer-events-none transition-transform duration-600 group-hover:rotate-[-90deg] group-hover:scale-x-[1.34] group-hover:scale-y-[0.77]"
      ></div>

      {/* Rotating gradient border */}
      <div
        className="absolute inset-0 -m-[5px] rounded-[10px] bg-gradient-to-br from-[#ececec] to-[#b3b3b3] z-0 pointer-events-none transition-transform duration-600 group-hover:rotate-[-90deg] group-hover:scale-x-[1.34] group-hover:scale-y-[0.77]"
      ></div>

      {/* Card content */}
      <div className="relative w-full h-full bg-black rounded-lg flex flex-col overflow-hidden text-white p-4">
        {/* Image */}
        <div className="w-full h-[50%] mb-[10%] relative">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="flex flex-col justify-end p-4 gap-2 md:gap-1 h-[50%] mt-auto">
          <p className="text-[18px] capitalize font-bold mt-2">{title}</p>
          <p className="text-[14px]">{subtitle}</p>
          <p className="text-[14px] font-semibold">
            {highlight}
          </p>
        </div>
      </div>
    </div>
  );
};

// Services Component
const Services: React.FC = () => {
  const cards = [
    {
      title: "Custom Development",
      subtitle: "Tailored Solutions",
      highlight: "Innovation",
      gradientFrom: "#e81cff",
      gradientTo: "#40c9ff",
      imageSrc: "/images/p1.jpg",
    },
    {
      title: "Creative Design",
      subtitle: "UI/UX Design",
      highlight: "Creativity",
      gradientFrom: "#fc00ff",
      gradientTo: "#00dbde",
      imageSrc: "/images/p1.jpg",
    },
    {
      title: "Cloud Services",
      subtitle: "Scalable Systems",
      highlight: "Efficiency",
      gradientFrom: "#8e2de2",
      gradientTo: "#4a00e0",
      imageSrc: "/images/p1.jpg",
    },
  ];

  return (
    <div id="services" className="bg-neutral-900 w-full py-[4rem] ">
      <p className="heading text-center text-gray-100 text-[2rem] font-bold">
        My <span className="text-red-700 ">Services</span>
      </p>
      <div className="flex flex-wrap justify-center my-[4rem] gap-y-[5%] w-[70%] mx-auto">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            highlight={card.highlight}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;