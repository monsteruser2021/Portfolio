import React from 'react'

interface Props {
    title: string
    year: string
}

const SkillsItem = ({title, year}: Props) => {
  return (
    <div className='mb-[4rem] md:mb-[2rem]'>
        <span className='px-[2rem] text-gray-200 py-[0.9rem] text-[20px] border-[4px] border-red-900 rounded-lg'>
            {year}
        </span>
        <h1 className='mt-[2rem] uppercase mb-[2rem] text-[20px] sm:text-[25px] md:text-[30px] text-gray-200'>
            {title}
        </h1>
        
    </div>
  )
}

export default SkillsItem
