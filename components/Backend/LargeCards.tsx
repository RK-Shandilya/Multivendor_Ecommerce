import React from 'react'
import LargeCard from './LargeCard'
import { Layers3 } from 'lucide-react'

const LargeCards = () => {
    const orderStats = [
        {
            period: 'Today Orders',
            sales: 110000,
            color: 'bg-red-600'
            },
            {
            period: 'Yesterday Orders',
            sales: 130000,
            color: 'bg-blue-600'
            },
            {
            period: 'This Month',
            sales: 1100000,
            color: 'bg-orange-600'
            },
            {
            period: 'Last Month',
            sales: 1000000,
            color: 'bg-purple-600'
            },
            {
            period: 'All Time Sales',
            sales: 5000000,
            color: 'bg-green-600'
        }
    ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-8'>
        {orderStats.map((orderStat, index) => (
            <LargeCard key={index} data={orderStat}/>
        ))}
    </div>
  )
}

export default LargeCards
