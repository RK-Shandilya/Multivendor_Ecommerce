"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from '@/public/logo-light.png'

  import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
  
  
import { Boxes, ChevronDown, ChevronRight, Compass, ExternalLink, LayoutGrid, LayoutList, LogOut, MonitorPlay, ScanSearch, SendToBack, Settings, Slack, User, Users2, UserSquare2, Warehouse } from 'lucide-react'
import { usePathname } from 'next/navigation'


const Sidebar = ({showSidebar, setShowSidebar}: {showSidebar: boolean, setShowSidebar: (show: boolean) => void}) => {
    const pathname = usePathname();
    const sidebarLinks = [
        {
            title: "Customers",
            icon:Users2,
            href: "/dashboard/customers"
        },
        {
            title: "Markets",
            icon:Warehouse,
            href: "/dashboard/markets"
        },
        {
            title: "Farmers",
            icon: UserSquare2,
            href: "/dashboard/farmers"
        },
        {
            title: "Orders",
            icon: Compass,
            href: "/dashboard/orders"
        },
        {
            title: "Our Staff",
            icon: User,
            href: "/dashboard/staff"
        },
        {
            title: "Settings",
            icon: Settings,
            href: "/dashboard/settings"
        },
        {
            title: "Online Store",
            icon: ExternalLink,
            href: "/"
        },
    ]

    const catalogueLinks = [
        {
            title: "Products",
            icon: Boxes,
            href: "/dashboard/products"
        },
        {
            title: "Categories",
            icon: LayoutList,
            href: "/dashboard/categories"
        },
        {
            title: "Attributes",
            icon: SendToBack,
            href: "/dashboard/attributes"
        },
        {
            title: "Coupons",
            icon: ScanSearch,
            href: "/dashboard/coupons"
        },
        {
            title: "store sliders",
            icon: MonitorPlay,
            href: "/dashboard/sliders"
        }
    ]

    const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className={showSidebar ? "sm:block mt-20 sm:mt-0 dark:bg-slate-700 bg-white space-y-6 w-64 h-screen text-slate-800 dark:text-slate-50 fixed left-0 top-0 shadow-md overflow-y-scroll"
    : "mt-20 sm:mt-0 hidden sm:block dark:bg-slate-700 bg-white space-y-6 w-64 h-screen text-slate-800 dark:text-slate-50 fixed left-0 top-0 shadow-md overflow-y-scroll"}>
        {showSidebar}
      <Link 
        onClick={()=> setShowSidebar(false)}
        className='px-6 py-4' href="/dashoard">
        <Image src={logo} alt='logo' className='w-36'/>
      </Link>
      <div className="space-y-3 flex flex-col ">
        <Link 
            onClick={()=> setShowSidebar(false)}
            href="/dashboard" className={pathname==='/dashboard'? "flex items-center space-x-3 px-6 py-2 border-l-4 text-lime-500 border-lime-500": "flex items-center space-x-3 px-6 py-2"}>
            <LayoutGrid/>
            <span>Dashboard</span>
        </Link>

        <Collapsible className='px-6 py-2'>
            <CollapsibleTrigger className='' onClick={()=> setOpenMenu(!openMenu)}>
                <button className="flex items-center space-x-6 py-2">
                    <div className="flex items-center space-x-3">
                        <Slack/>
                        <span>Catalogue</span>
                    </div>
                    {openMenu? <ChevronDown/>: <ChevronRight/> }
                </button>
            </CollapsibleTrigger>
            <CollapsibleContent className='rounded-md px-3 py-3 pl-6 bg-slate-800'>
                {
                    catalogueLinks.map( (link, index) => (
                        <Link 
                            onClick={()=> setShowSidebar(false)}
                            key={index} href={link.href} className={pathname===link.href? "flex items-center space-x-3 py-1 text-sm text-lime-500": "flex items-center space-x-3 py-1 text-sm"}>
                            <link.icon className='w-4 h-4'/>
                            <span>{link.title}</span>
                        </Link>
                    ))
                }
            </CollapsibleContent>
        </Collapsible>

        {
            sidebarLinks.map((item, i) => {
                const Icon = item.icon
                return (
                    <Link 
                        onClick={()=> setShowSidebar(false)}
                        key={i} href={item.href} className={item.href===pathname? "flex items-center space-x-3 px-6 py-2 border-l-4 text-lime-500 border-lime-500": "flex items-center space-x-3 px-6 py-2"}>
                        <Icon />
                        <span>{item.title}</span>
                    </Link>
                )
            })
        }
        <div className='py-2 px-6'>
            <button className='bg-lime-600 rounded-md flex items-center space-x-3 py-3 px-6'>
                <LogOut/>
                Log Out
            </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
