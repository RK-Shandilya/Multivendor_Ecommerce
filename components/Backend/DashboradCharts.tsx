import React from 'react'
import WeeklySalesChart from './WeeklySalesChart'
import BestSellingCharts from './BestSellingCharts'

const DashboradCharts = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <WeeklySalesChart />
      <BestSellingCharts/>
    </div>
  )
}

export default DashboradCharts
