import { Layers3 } from 'lucide-react'
import React from 'react'

interface LargeCardProps {
    data : {
        period: string,
        sales: number,
        color: string
    }
} 

const LargeCard = ({data}:LargeCardProps) => {

  return (
    <div className={`shadow-md rounded-lg ${data.color} text-white p-8 flex flex-col items-center gap-2`}>
      <Layers3/>
      <h4>{data.period}</h4>
      <h2 className='text-2xl g:text-3xl'>INR.{data.sales}</h2>
    </div>
  )
}

export default LargeCard
