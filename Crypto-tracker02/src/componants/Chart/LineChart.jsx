import React, { useState } from 'react'
import {Line}  from 'react-chartjs-2'
import {Interaction, Chart as chartjs, plugins } from  'chart.js/auto'

function LineChart({data,priceType, MultiAxis}){
  const [chartData, setChartData] = useState({
    labels: ["january", "February", "March", "April", "May", "June"],
    datasets : [
      {
       label:"my first data sets",
       backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data : [0, 10, 5, 2, 20, 30, 45],
      }
    ]
  })

 
   return (
     <div className='p-7 m-4'>
       <Line data={data}/>
     </div> 
   
   )
}

export default LineChart
