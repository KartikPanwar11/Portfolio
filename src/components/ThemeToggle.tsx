import { useEffect, useRef, useState } from 'react'
type Theme = 'system' | 'light' | 'dark'
const choices: Theme[] = ['system', 'light', 'dark']
function ThemeIcon({ theme }: { theme: Theme }) {
 return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-5">{theme==='light'?<><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5"/></>:theme==='dark'?<path d="M20.9 13.1A9 9 0 0 1 10.9 3.1 9 9 0 1 0 20.9 13.1Z"/>:<><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/></>}</svg>
}
export default function ThemeToggle() {
 const [theme,setTheme]=useState<Theme>(()=>{try{const saved=localStorage.getItem('kp-theme');return choices.includes(saved as Theme)?saved as Theme:'system'}catch{return 'system'}})
 const [open,setOpen]=useState(false)
 const container=useRef<HTMLDivElement>(null)
 const trigger=useRef<HTMLButtonElement>(null)
 useEffect(()=>{document.documentElement.dataset.theme=theme;try{localStorage.setItem('kp-theme',theme)}catch{/* Theme still works when storage is unavailable. */}},[theme])
 useEffect(()=>{
  if(!open)return
  const outside=(event:PointerEvent)=>{if(!container.current?.contains(event.target as Node))setOpen(false)}
  const escape=(event:KeyboardEvent)=>{if(event.key==='Escape'){setOpen(false);trigger.current?.focus()}}
  document.addEventListener('pointerdown',outside);document.addEventListener('keydown',escape)
  return()=>{document.removeEventListener('pointerdown',outside);document.removeEventListener('keydown',escape)}
 },[open])
 return <div ref={container} className="relative"><button ref={trigger} type="button" aria-label={`Change theme, current: ${theme}`} aria-expanded={open} aria-controls="theme-options" onClick={()=>setOpen(!open)} className="nav-icon inline-flex items-center justify-center"><ThemeIcon theme={theme}/></button>{open&&<div id="theme-options" className="theme-panel absolute top-full right-0 z-50 mt-3 w-44 rounded-2xl p-2" role="group" aria-label="Color theme"><p className="px-3 py-2 text-xs font-medium text-muted">APPEARANCE</p>{choices.map(choice=><button key={choice} type="button" aria-pressed={theme===choice} onClick={()=>{setTheme(choice);setOpen(false);trigger.current?.focus()}} className="flex min-h-11 w-full items-center gap-3 rounded-xl px-3 text-sm hover:bg-accent/10"><ThemeIcon theme={choice}/><span className="capitalize">{choice}</span>{theme===choice&&<span aria-hidden="true" className="ml-auto text-accent">✓</span>}</button>)}</div>}</div>
}

