import { AlignJustify, Bell, LayoutDashboard, LogOut, Settings, Sun, User, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Profile from '@/public/Profile.jpeg'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import ThemeSwitcherBtn from '../ThemeSwitcherBtn'
  

const Navbar = () => {
  return (
    <div className="flex items-center justify-between dark:bg-slate-800 bg-white text-slate-50 h-16 py-4 fixed top-0 w-full px-8 z-50 pr-[20rem]">
      <button className='text-lime-700 dark:text-lime-500'>
        <AlignJustify/>
      </button>
      <div className="flex space-x-3">
        <ThemeSwitcherBtn />

        <DropdownMenu>
            <DropdownMenuTrigger>
                <button type="button" className="bg-transparent relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg ">
                    <Bell className='text-lime-700 dark:text-lime-500 fill-current'/>
                    <span className="sr-only">Notifications</span>
                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 rounded-full -top-0 end-6 dark:border-gray-900">20</div>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='py-2 px-4 pr-8'>
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className=''>
                    <div className='flex items-center space-x-2'>
                        <Image src={Profile} alt='User Profile' width={200} height={200} className='w-8 h-8 rounded-full'/>
                        <div className="flex flex-col space-y-1">
                            <p>Yellow Sweet Corn Stock out,</p>
                            <div className="flex items-center space-x-2">
                                <p className='px-3 py-0.5 bg-red-700 text-white rounded-full text-sm '>Stock Out</p>
                                <p>Dec 12 2021 - 12:40PM</p>
                            </div>
                        </div>
                        <button>
                            <X/>
                        </button>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                
                <DropdownMenuItem className=''>
                    <div className='flex items-center space-x-2'>
                        <Image src={Profile} alt='User Profile' width={200} height={200} className='w-8 h-8 rounded-full'/>
                        <div className="flex flex-col space-y-1">
                            <p>Yellow Sweet Corn Stock out,</p>
                            <div className="flex items-center space-x-2">
                                <p className='px-3 py-0.5 bg-red-700 text-white rounded-full text-sm '>Stock Out</p>
                                <p>Dec 12 2021 - 12:40PM</p>
                            </div>
                        </div>
                        <button>
                            <X/>
                        </button>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
            </DropdownMenuContent>
        </DropdownMenu>


        <DropdownMenu>
            <DropdownMenuTrigger>
                <button className='text-green-600'>
                    <Image src={Profile} alt='User-Profile' width={200} height={200} className='w-8 h-8 rounded-full'/>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='py-2 px-4 pr-8'>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className=''>
                    <button className='flex items-center space-x-2'>
                        <LayoutDashboard className='mr-2 h-4 w-4'/>
                        <span>Dashboard</span>
                    </button>
                    
                </DropdownMenuItem>
                <DropdownMenuItem className=''>
                    <button className='flex items-center space-x-2'>
                        <Settings className='mr-2 h-4 w-4'/>
                        <span>Edit Profile</span>
                    </button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <button className='flex items-center space-x-2'>
                        <LogOut className='mr-2 h-4 w-4'/>
                        <span>Log Out</span>
                    </button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </div>
  )
}

export default Navbar
