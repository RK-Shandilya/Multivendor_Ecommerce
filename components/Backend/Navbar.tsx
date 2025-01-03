import { AlignJustify, Bell, Sun, User } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-slate-800 text-slate-50 h-16 px-8 py-4 fixed w-full top-0 right-0 left-60'>
      <button>
        <AlignJustify/>
      </button>
      <div className="flex space-x-3">
        <button><Sun/></button>
        <button><Bell/></button>
        <button><User/></button>
      </div>
    </div>
  )
}

export default Navbar
