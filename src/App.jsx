import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Edu from './components/Edu'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-slate-900 text-slate-50 min-h-screen'>
      <Nav/>
      <section id="home"><Hero/></section>
      <section id="about"><About/></section>
      <section id="education"><Edu/></section>
      <section id="skills"><Skills/></section>
      <section id="projects"><Projects/></section>
      <section id="contact"><Footer/></section>
    </div>
  )
}

export default App