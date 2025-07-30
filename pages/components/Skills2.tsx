import React from 'react'

type Skill = {
  name: string;
  percentage: number;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', percentage: 90 },
      { name: 'TypeScript', percentage: 80 },
      { name: 'JavaScript', percentage: 85 },
      { name: 'HTML5', percentage: 95 },
      { name: 'CSS3', percentage: 95 },
    ],
  },
  {
    title: 'Estilos & Preprocesadores',
    skills: [
      { name: 'TailwindCSS', percentage: 90 },
      { name: 'Diseño responsivo', percentage: 80 },
      { name: 'Sass/SCSS', percentage: 75 },
      { name: 'Animaciones con CSS', percentage: 85 },
      { name: 'Material UI', percentage: 65 },
    ],
  },
  {
    title: 'Herramientas & Versionado',
    skills: [
      { name: 'Git', percentage: 90 },
      { name: 'Penpot', percentage: 80 },
      { name: 'Illustrator', percentage: 85 },
      { name: 'npm', percentage: 75 },
      { name: 'Webpack', percentage: 80 },
    ],
  },
];

const Skills2 = () => {
  return (
    <div id='skills' className='bg-zinc-900 md:bg-zinc-800 w-full pb-[3rem] pt-[4rem] md:pt-[8rem]'>
      <h1 className='heading'>Habilidades <span className='text-gray-100 '>técnicas</span></h1>
      {/* Skills section */}
      <div className='w-[75%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4rem] mt-[4rem] text-white'>
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className='w-full flex flex-col items-center justify-center text-center p-[1rem] md:p-[2rem]'
          >
            <h3 className='text-[1.2rem] md:text-[1.5rem] text-gray-100 mb-[0.5rem] font-semibold '>
              {category.title}
            </h3>
            {/* Skills */}
            {category.skills.map((skill) => (
              <div key={skill.name} className='w-[90%] mx-auto mt-[1rem]'>
                <div className='flex justify-between items-center text-sm'>
                  <p>{skill.name}</p>
                  <p>{skill.percentage}%</p>
                </div>
                <div className='w-full bg-gray-300 rounded-full h-[0.5rem] mt-[0.5rem]'>
                  <div
                    className='bg-[#e84624] h-[0.5rem] rounded-full'
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills2