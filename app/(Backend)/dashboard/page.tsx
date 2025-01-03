import React from 'react'
import Heading from '@/components/Backend/Heading'
import LargeCards from '@/components/Backend/LargeCards'
import SmallCards from '@/components/Backend/SmallCards'
import DashboradCharts from '@/components/Backend/DashboradCharts'

const page = () => {
  return (
    <div>
      <Heading title="Dashboard Overview"></Heading>
      <LargeCards/>
      <SmallCards/>
      <DashboradCharts/>
    </div>
  )
}

export default page
