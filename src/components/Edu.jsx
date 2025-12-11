import React from 'react'

const Edu = () => {

    const educationData = [
    {
      id: 1,
      degree: "Master of Computer Applications (MCA)",
      institution: "Lovely Professional University",
      year: "2025 - Present",
      desc: "Focusing on AI/ML & Web Technologies.",
    },
    {
      id: 2,
      degree: "Bachelor of Science (B.Sc) in Biotechnology",
      institution: "Sharda University",
      year: "2021 - 2024",
      desc: "Did alot of Research work in Microbiology and Genetic Engineering. Learnt coding on the side.",
    },
  ];

  return (
    <section className='max-w-4xl mx-auto px-6 py-5'>

      <h2 className='text-3xl font-bold mb-12 text-center text-slate-800 dark:text-slate-200'>
        My <span className='text-purple-600 dark:text-purple-500 drop-shadow-[0_0_8px_rgba(147,51,234,0.8)]'>Education</span>
      </h2>

      {/* Card */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {educationData.map((item) => (
          <div 
            key={item.id} 
            className='group relative p-8 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-500/10 hover:border-purple-500/30'>
            {/* Hat */}
            <div className='absolute top-6 right-6 text-slate-200 dark:text-slate-700 group-hover:text-purple-500/20 transition-colors'>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </div>


            <span className='inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-purple-600 uppercase bg-purple-100 rounded-lg dark:bg-purple-900/30 dark:text-purple-300'>
              {item.year}
            </span>

            <h3 className='text-xl font-bold text-slate-800 dark:text-slate-100 mb-1'>
              {item.degree}
            </h3>
            
            <p className='text-base font-medium text-teal-500 dark:text-teal-400 mb-4'>
              {item.institution}
            </p>
            
            <p className='text-sm leading-relaxed text-slate-600 dark:text-slate-400'>
              {item.desc}
            </p>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Edu