import React from 'react'

const Nav = () => {
  const handleNavClick = (e) => {
    const href = e.currentTarget.getAttribute('href')
    if (href.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className='w-full px-6 py-4 flex items-center justify-between bg-slate-900 text-slate-50 top-0 z-50 border-b border-slate-700'>
      <div className='font-semibold text-lg'>Kartik Panwar</div>

      <div className='flex items-center gap-6'>
        <div className='hidden md:flex gap-6'>
          <a href="#home" onClick={handleNavClick} className='text-slate-50 hover:text-purple-400 transition-colors'>Home</a>
          <a href="#about" onClick={handleNavClick} className='text-slate-50 hover:text-purple-400 transition-colors'>About</a>
          <a href="#skills" onClick={handleNavClick} className='text-slate-50 hover:text-purple-400 transition-colors'>Skills</a>
          <a href="#projects" onClick={handleNavClick} className='text-slate-50 hover:text-purple-400 transition-colors'>Projects</a>
          <a href="#contact" onClick={handleNavClick} className='text-slate-50 hover:text-purple-400 transition-colors'>Contact</a>
        </div>

        <a
          href="/resume.pdf"
        //   download
          className='px-4 py-2 rounded-md bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition'
        >
          Resume
        </a>
      </div>
    </nav>
  )
}

export default Nav