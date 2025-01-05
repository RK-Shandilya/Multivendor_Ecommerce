"use client"
import React, {useState} from 'react'
import {faker} from '@faker-js/faker'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from "react-chartjs-2";

const WeeklySalesChart = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );

      const options = {
        responsive: true,
        plugins: {
          title: {
            display: false,
            text: 'Chart.js Line Chart',
          },
          legend: {
            position: 'top',
            labels: {
                color: 'white',
            }
          }
        },
      };
      
      const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    const tabs = [
        {
            title: 'Sales',
            type: 'sales',
            data: 
            {
                labels,
                datasets: [
                    {
                        label: 'Sales',
                        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                ],
            }
        },
        {
            title: 'Orders',
            type: 'orders',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Orders',
                        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
                        borderColor: 'rgb(54, 162, 235)',
                        backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    },
                ],
            }
        }
    ];

    const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type)

  return (
    <div className='dark:bg-slate-700 bg-slate-50 p-8 rounded-lg shadow-xl'>
        <h2 className='text-xl font-bold mb-4 text-slate-800 dark:text-slate-50'>Weekly Sales</h2>
        
        <div className="p-4">
            <div className="text-sm font-medium text-center  text-gray-200 border-b border-gray-400 ">
                <ul className="flex flex-wrap -mb-px">
                    {
                        tabs.map((tab,i) => (
                            <li className="me-2" key={i}>
                                <button 
                                    className={`${chartToDisplay === tab.type ? 'inline-block p-4 border-b-2 border-transparent rounded-t-lg text-orange-600 border-orange-600 dark:text-orange-500 dark:border-orange-500' : 'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:border-gray-100 text-slate-800 hover:text-slate-700'}`}
                                    onClick={() => setChartToDisplay(tab.type)}
                                >
                                    {tab.title}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>

            { tabs.map((tab,i) => {                
                if(chartToDisplay === tab.type) {
                    return <Line key={i} data={tab.data} options={options} />
                }
                return null
            })}
        <div/>
        </div>
    </div> 
  )
}


export default WeeklySalesChart