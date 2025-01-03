import React from 'react'
import SmallCard from './SmallCard'
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from 'lucide-react'

const SmallCards = () => {
    const orderStatus = [
        {
            title: 'Today Order',
            number: 500,
            iconBg: 'bg-red-600',
            icon: <ShoppingCart/>
        },
        {
            title: 'Orders pending',
            number: 100,
            iconBg: 'bg-blue-600',
            icon: <Loader2/>
        },
        {
            title: 'Orders proceesing',
            number: 200,
            iconBg: 'bg-orange-600',
            icon: <RefreshCcw/>
        },
        {
            title: 'Orders Delievered',
            number: 100,
            iconBg: 'bg-purple-600',
            icon: <CheckCheck/>
        },
    ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
        {orderStatus.map((data, index) => (
            <SmallCard key={index} data={data}/>
        ))}
    </div>
  )
}

export default SmallCards
