import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='dark:bg-slate-700 bg-white w-60 space-y-6 h-screen dark:text-slate-50 text-slate-800 p-3 fixed top-0 left-0 shadow-md'>
      <Link className='mb-6' href="#">Logo</Link>
      <div className="space-y-3 flex flex-col">
        <Link href="#">Dashboard</Link>
        <Link href="#">Catalogue</Link>
        <Link href="#">Customers</Link>
        <Link href="#">Markets</Link>
        <Link href="#">Farmers</Link>
        <Link href="#">Orders</Link>
        <Link href="#">Staff</Link>
        <Link href="#">Settings</Link>
        <Link href="#">Online Store</Link>
        <Link href="#">Staff</Link>
      </div>
    </div>
  )
}

export default Sidebar
