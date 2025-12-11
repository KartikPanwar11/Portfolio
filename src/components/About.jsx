import React from 'react'

const About = () => {
  return (
    <section className='max-w-4xl mx-auto px-6 py-12 text-slate-800 dark:text-slate-200'>
        <h2 className='text-3xl font-bold mb-8 text-center'>
        About <span className='text-purple-500 drop-shadow-[0_0_8px_rgba(147,51,234,0.8)]'>Me</span>
      </h2>


      <div className='bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl'>
        
        <p className='text-lg leading-relaxed mb-6'>
          I'm <span className='font-semibold text-purple-600 dark:text-purple-400'>Kartik</span>, a Full-Stack Developer who loves building things that live on the internet. My journey began in my final year of university. I've always been a massive tech enthusiast, but the moment I watched my first web development tutorial, something clicked—and I've been hooked ever since.
        </p>

        <p className='text-lg leading-relaxed'>
          Today, I specialize in the <span className='font-semibold'>MERN stack</span>. While I love writing clean backend logic, I care just as deeply about <strong>User Experience</strong>. Currently, I’m focused on mastering Next.js and Tailwind CSS. When I'm not debugging code, you can usually find me <span className='font-semibold text-purple-400'>gaming</span>—whether it's grinding ranked matches or exploring open worlds, I love a good challenge.
        </p>

      </div>
    </section>
  )
}

export default About