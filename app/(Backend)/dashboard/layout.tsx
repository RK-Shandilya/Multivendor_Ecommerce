import Navbar from '@/components/Backend/Navbar';
import Sidebar from '@/components/Backend/Sidebar';
import React from 'react'

import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className="lg:ml-64 ml-0 flex-grow bg-slate-100 min-h-screen">
        <Navbar/>
        <main className='p-8 bg-slate-100 dark:bg-slate-900 dark:text-slate-50 min-h-screen mt-16'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default layout
