import React from 'react'

interface headingProps {
  title: string
}

const Heading = ({title} : headingProps) => {
  return (
      <h2 className='text-2xl dark:text-slate-50 text-slate-800 font-semibold'>{title}</h2>
  )
}

export default Heading
