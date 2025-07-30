import React from 'react'

const Services = () => {
  return (
    <div
    id='services'
    className='bg-neutral-900 w-full pt-[4rem] md:pt-[8rem] pb-[5rem]'>
      <p className='heading'>My<span className='text-gray-100'> Services</span></p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[4rem] mt-[4rem] text-white'>
        {/**Card 1*/}
        <div className="relative group w-[190px] h-[254px] cursor-pointer">

          {/* Borde degradado detrás del componente */}
          <div className="absolute inset-0 -m-[5px] w-[200px] h-[264px] rounded-[10px] bg-gradient-to-br from-[#ececec] to-[#b3b3b3] z-0 pointer-events-none transition-transform duration-600 group-hover:rotate-[-90deg] group-hover:scale-x-[1.34] group-hover:scale-y-[0.77]"></div>
          
          {/* Contenido principal */}
          <div className="relative w-full h-full bg-black rounded-lg flex flex-col justify-end p-3 gap-3 text-white">
            <p className="text-[20px] capitalize font-bold">Popular this month</p>
            <p className="text-[14px]">Powered By</p>
            <p className="text-[14px] text-[#e81cff] font-semibold">Uiverse</p>
          </div>
        </div>
        {/**Card 2*/}
        <div className="relative group w-[190px] h-[254px] cursor-pointer">
          
          {/* Borde degradado detrás del componente */}
          <div className="absolute inset-0 -m-[5px] w-[200px] h-[264px] rounded-[10px] bg-gradient-to-br from-[#ececec] to-[#b3b3b3] z-0 pointer-events-none transition-transform duration-600 group-hover:rotate-[-90deg] group-hover:scale-x-[1.34] group-hover:scale-y-[0.77]"></div>
          
          {/* Contenido principal */}
          <div className="relative w-full h-full bg-black rounded-lg flex flex-col justify-end p-3 gap-3 text-white">
            <p className="text-[20px] capitalize font-bold">Popular this month</p>
            <p className="text-[14px]">Powered By</p>
            <p className="text-[14px] text-[#e81cff] font-semibold">Uiverse</p>
          </div>
        </div>
        {/**Card 3*/}
        <div className="relative group w-[190px] h-[254px] cursor-pointer">
          
          {/* Borde degradado detrás del componente */}
          <div className="absolute inset-0 -m-[5px] w-[200px] h-[264px] rounded-[10px] bg-gradient-to-br from-[#ececec] to-[#b3b3b3] z-0 pointer-events-none transition-transform duration-600 group-hover:rotate-[-90deg] group-hover:scale-x-[1.34] group-hover:scale-y-[0.77]"></div>
          
          {/* Contenido principal */}
          <div className="relative w-full h-full bg-black rounded-lg flex flex-col justify-end p-3 gap-3 text-white">
            <p className="text-[20px] capitalize font-bold">Popular this month</p>
            <p className="text-[14px]">Powered By</p>
            <p className="text-[14px] text-[#e81cff] font-semibold">Uiverse</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services