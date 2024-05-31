import React, { useEffect, useState } from 'react'
import LineChart from '../componants/Chart/LineChart'

function Compare() {
  
    const [data, setData] = useState({
        labels: [],
        datasets: []
    });

    function set(){
         setData({
            labels:["jan", "Feb", "March"],
            datasets:[
            {
              label : "my first data set",
              backgroundColor: "rgb(255, 99, 132)",
              borderColor : "rgb(255, 99, 132)",
              data : [12,23,6,]
            }
            ]
          })
    }
  useEffect(()=>{
    set()
  },[])
  return (
    <div>
      {/* <LineChart data={data}/> */}
    </div>
  )
}

export default Compare
 