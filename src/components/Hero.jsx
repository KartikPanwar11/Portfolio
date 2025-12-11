import React from 'react'
import heroImg from '../assets/heroImg.png'

const Hero = () => {
  return (
    <section className='w-full h-screen flex flex-col justify-center items-center gap-8 px-8 py-20 bg-slate-950'>
      <div className='rounded-full object-cover overflow-hidden  w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700 bg-white'>
        <img src={heroImg} alt='Kartik' className='w-full h-full object-cover scale-125 object-right-2' />
      </div>

      <div className='w-full text-center'>
        <div className='rounded-lg p-6 bg-white/70bg-slate-900/60 backdrop-blur-sm'>
          <h1 className='font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight text-slate-50'>
            Hey there,
            <br />
            I am <span className='text-purple-600 drop-shadow-[0_0_8px_rgba(147,51,234,0.8)] dark:text-purple-500'>Kartik Panwar</span>
          </h1>
          <p className='mt-3 text-sm md:text-base text-slate-700 dark:text-slate-200'>
            Full-Stack Web Developer building focused, maintainable web applications.
          </p>
          
        </div>
      </div>
    </section>
  )
}

export default Hero