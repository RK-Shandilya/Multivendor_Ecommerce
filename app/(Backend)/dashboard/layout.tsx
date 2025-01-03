import Navbar from '@/components/Backend/Navbar';
import Sidebar from '@/components/Backend/Sidebar';
import React from 'react'

import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className="w-full">
        <Navbar/>
        <main className='ml-60 p-8 bg-slate-900 text-slate-50 min-h-screen mt-16'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default layout
