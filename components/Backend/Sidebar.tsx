"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/logo-light.png'

  import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
  
  
import { ChevronRight, Compass, ExternalLink, LayoutGrid, LogOut, Settings, Slack, User, Users2, UserSquare2, Warehouse } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { title } from 'process'


const Sidebar = () => {
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
            icon:Users2,
            href: "/dashboard/products"
        },
        {
            title: "Categories",
            icon:Warehouse,
            href: "/dashboard/categories"
        },
        {
            title: "Attributes",
            icon: UserSquare2,
            href: "/dashboard/attributes"
        },
        {
            title: "Coupons",
            icon: Slack,
            href: "/dashboard/coupons"
        },
        {
            title: "store sliders",
            icon: User,
            href: "/dashboard/sliders"
        }
    ]

  return (
    <div className= 'w-64 dark:bg-slate-700 bg-white space-y-6 h-screen dark:text-slate-50 text-slate-800 fixed top-0 left-0 shadow-md'>
      <Link className='px-6 py-4' href="#">
        <Image src={logo} alt='logo' className='w-36'/>
      </Link>
      <div className="space-y-3 flex flex-col mt-14 ">
        <Link href="/dashboard" className={pathname==='/dashboard'? "flex items-center space-x-3 px-6 py-2 border-l-4 text-lime-500 border-lime-500": "flex items-center space-x-3 px-6 py-2"}>
            <LayoutGrid/>
            <span>Dashboard</span>
        </Link>

        <Collapsible>
            <CollapsibleTrigger>
                <button className="flex items-center space-x-6 px-6 py-2">
                    <div className="flex items-center space-x-3">
                        <Slack/>
                        <span>Catalogue</span>
                    </div>
                    <ChevronRight/>
                </button>
            </CollapsibleTrigger>
            <CollapsibleContent>
                {
                    catalogueLinks.map( (link, index) => (
                        <Link key={index} href={link.href} className={pathname===link.href? "flex items-center space-x-3 px-6 py-2 border-l-4 text-lime-500 border-lime-500": "flex items-center space-x-3 px-6 py-2"}>
                            <LayoutGrid/>
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
                    <Link key={i} href={item.href} className={item.href===pathname? "flex items-center space-x-3 px-6 py-2 border-l-4 text-lime-500 border-lime-500": "flex items-center space-x-3 px-6 py-2"}>
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
