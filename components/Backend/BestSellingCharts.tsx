"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const BestSellingCharts = () => {
    const data= {
        labels: [
            'Cabbage', 
            'Watermelon', 
            'Broccoli', 
            'Maize'
        ],
        datasets: [{
            label : '# of Votes',
            data: [40,20,20,20],
            backgroundColor: [
                "rgb(34, 197, 94)",
                "rgb(59, 130, 246)",
                "rgb(249, 115, 22)",
                "rgb(168, 85, 247)"
            ],
            borderWidth: 2
        }]
    }

  return (
    <div className='dark:bg-slate-700 bg-slate-50 p-8 rounded-lg shadow-xl'>
        <h2 className='text-xl font-bold mb-4 text-slate-800 dark:text-slate-50'>Best Selling Charts</h2>
        <div className='w-full h-96 flex items-center justify-center'>
            <Pie
                data = {data}
                options={{
                    plugins: {
                        legend: {
                            display: true,
                            labels: {
                                color: 'black'
                            }
                        }
                    }
                }}
            />
        </div>
    </div>
  )
}

export default BestSellingCharts
