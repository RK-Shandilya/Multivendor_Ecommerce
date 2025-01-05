"use client"
import React, {useEffect, useState} from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react';

const ThemeSwitcherBtn = () => {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();

  useEffect(()=> {
    setMounted(true)
  },[])

  if(!mounted) return null;

  return (
    <button
    className="text-lime-700 dark:text-lime-500"
    onClick={()=> setTheme(theme==="dark" ? "light": "dark")}
    >
      {theme==="light" ? <Moon className='fill-current'/> : <Sun className='fill-current'/>}
    </button>
  )
}

export default ThemeSwitcherBtn
