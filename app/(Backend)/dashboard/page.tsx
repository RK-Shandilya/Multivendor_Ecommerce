import React from 'react'
import Heading from '@/components/Backend/Heading'
import LargeCards from '@/components/Backend/LargeCards'
import SmallCards from '@/components/Backend/SmallCards'
import DashboradCharts from '@/components/Backend/DashboradCharts'
import CustomTables from '@/components/Backend/CustomTables'

const page = () => {
  return (
    <div>
      <Heading title="Dashboard Overview"></Heading>
      <LargeCards/>
      <SmallCards/>
      <DashboradCharts/>
      <CustomTables/>
    </div>
  )
}

export default page
