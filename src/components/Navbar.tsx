import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
const navigation = [{label:'About',href:'#about'},{label:'Skills',href:'#skills'},{label:'Projects',href:'#projects'},{label:'Journey',href:'#journey'}]
export default function Navbar() {
 const [open,setOpen]=useState(false)
 const [active,setActive]=useState('')
 useEffect(()=>{
  const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting)setActive(`#${entry.target.id}`)}},{rootMargin:'-15% 0px -55% 0px'})
  document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section))
  return()=>observer.disconnect()
 },[])
 useEffect(()=>{
  if(!open)return
  const close=(event:KeyboardEvent)=>{if(event.key==='Escape')setOpen(false)}
  window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close)
 },[open])
 return <header className="fixed inset-x-0 top-3 z-40 px-3 sm:top-5 sm:px-6"><nav aria-label="Main navigation" className="glass-nav mx-auto max-w-[1050px] rounded-[26px] p-2 pl-5 sm:pl-6"><div className="relative z-10 flex items-center justify-between gap-3"><a href="#home" aria-label="KP home" onClick={()=>setOpen(false)} className="mr-auto py-2 text-[30px] font-extrabold tracking-[-2px]">kp<span className="text-accent">.</span></a><div className="nav-segment hidden items-center gap-1 rounded-full p-1 md:flex">{navigation.map(n=><a key={n.href} href={n.href} aria-current={active===n.href?'location':undefined} className={`nav-link rounded-full px-4 py-2.5 text-sm transition-colors ${active===n.href?'nav-active text-content':'text-muted hover:text-content'}`}>{n.label}</a>)}</div><span aria-hidden="true" className="mx-1 hidden h-6 w-px bg-outline md:block"/><ThemeToggle/><a href="#contact" className="nav-contact hidden min-h-11 items-center rounded-full px-5 text-sm font-semibold sm:inline-flex">Let’s talk</a><button type="button" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)} className="nav-icon inline-flex items-center justify-center md:hidden"><svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{open?<path d="m6 6 12 12M6 18 18 6"/>:<path d="M4 7h16M4 12h16M4 17h16"/>}</svg></button></div>{open&&<div id="mobile-navigation" className="relative z-10 mt-2 grid gap-1 border-t border-outline p-2 pt-3 md:hidden">{navigation.map(n=><a key={n.href} href={n.href} onClick={()=>setOpen(false)} className={`nav-link rounded-xl px-4 py-3 ${active===n.href?'nav-active text-content':'text-muted'}`}>{n.label}</a>)}<a href="#contact" onClick={()=>setOpen(false)} className="nav-contact mt-2 rounded-xl px-4 py-3 text-center text-sm font-semibold">Let’s talk</a></div>}</nav></header>
}

