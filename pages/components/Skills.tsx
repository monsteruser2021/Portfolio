import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'

const Skills = () => {
  return (
    <div
    id='skills'
    className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-neutral-800'>
      <h1 className='heading'>
        Education & <span className='text-gray-100'>Skills</span>
      </h1>
      <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
        <div>
            <SkillsItem title='Front-end Developer' year='2022 - Present'/>
            <p className='text-gray-200 w-[80%] mb-[5rem] text-[17px] opacity-80'>
            I am a frontend developer looking to create intuitive and efficient user interfaces using the latest development practices. Building complex and scalable web applications, optimizing performance and user experience.
            </p>
            <SkillsItem title='Back-end Developer' year='2024 - Present'/>
            <p className='text-gray-200 w-[80%] mb-[5rem] text-[17px] opacity-80'>
            As a backend developer, I build the solid foundation of applications, designing robust and scalable architectures. I implement the business logic that drives application functionality, ensuring that they can grow and adapt to changing business demands.
            </p>
            <SkillsLanguage 
            skill1='HTML5' 
            skill2='CSS3' 
            skill3='JavaScript' 
            level1='w-[91%]' 
            level2='w-[88%]' 
            level3='w-[80%]'
            />
        </div>
        <div>
            <SkillsItem title='React Developer' year='2024-Present'/>
            <p className='text-gray-200 w-[80%] mb-[5rem] text-[17px] opacity-80'>
            As a React developer, I focus on transforming designs into reality. I have in-depth knowledge of components, state, hooks and other key React features to build interactive and custom web applications.
            </p>
            <SkillsItem title='Next JS Developer' year='2024 present'/>
            <p className='text-gray-200 w-[80%] mb-[5rem] text-[17px] opacity-80'>
            I am a developer specialized in Next.js, a React framework that allows me to build web applications quickly and efficiently. I leverage the advantages of Next.js, such as server-side rendering (SSR), page routing, and static site generation, to create modern and scalable web applications.
            </p>
            <SkillsLanguage 
            skill1='React Js' 
            skill2='Next Js' 
            skill3='TypeScript' 
            level1='w-[81%]' 
            level2='w-[78%]' 
            level3='w-[60%]'
            />
        </div>
      </div>
    </div>
  )
}

export default Skills
