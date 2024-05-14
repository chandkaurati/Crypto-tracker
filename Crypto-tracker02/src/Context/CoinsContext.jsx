import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
 export const CoinsContext = createContext()

 const CoinsContextProvider = ({children})=>{
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
   return <CoinsContext.Provider value={{data}}>
      {children}
    </CoinsContext.Provider>
 }

 


 export default CoinsContextProvider
