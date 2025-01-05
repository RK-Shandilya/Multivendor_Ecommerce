import { ShoppingCart } from 'lucide-react'
import React from 'react'

interface SmallCardProps {
    data: {
        title: string,
        number: number,
        iconBg: string,
        icon: React.JSX.Element
    }
}

const SmallCard = ({data} : SmallCardProps) => {
    const {title, number, iconBg, icon: Icon} = data;

  return (
    <div className='rounded-lg shadow-lg dark:text-slate-50 text-slate-800 bg-slate-50 dark:bg-slate-700 p-4'>
        <div className="flex space-x-4">
            <div className={`w-12 h-12 rounded-full ${iconBg} flex items-center justify-center`}>
                {Icon}
            </div>
            <div className=''>
                <p>{title}</p>
                <h3 className='text-2xl font-bold'>{number}</h3>
            </div>
        </div>
    </div>
  )
}

export default SmallCard
