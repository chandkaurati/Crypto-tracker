import React, { useEffect, useState } from 'react'
import LabTabs from '../Common/Tabs'
import axios  from 'axios'
function Dashboard() {
const [data, setData] = useState([])

useEffect(()=>{
  const fetchData = async()=>{
    const options = {
       method : "GET",
       url : 'https://api.coingecko.com/api/v3/coins/markets',
       params:{
          vs_currency:"usd",
          per_page:100,
          x_cg_demo_api_key:  'CG-GoihbSiGKyma1fZv8hxeeDeE',
       },
       headers:{accept: 'application/json'}
    }
 
    try {
     const responce = axios.request(options)
     setData((await responce).data)
     console.log(data)
    } catch (error) {
     console.log(error)
    }
 }

 fetchData()
},[])
  return (
    <div>
     <LabTabs coins={data}/>
    </div>
  )
}

export default Dashboard
