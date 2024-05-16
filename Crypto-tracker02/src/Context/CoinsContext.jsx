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
                  per_page:10,
                  x_cg_demo_api_key:  'CG-GoihbSiGKyma1fZv8hxeeDeE',
               },
               headers:{accept: 'application/json'}
            }
         
            try {
             const responce = await axios.request(options)
             setData(responce.data)
             console.log(data)
            } catch (error) {
             console.log(error)
            }
         } 
         fetchData()
    },[])
 
    const fetchCoinById = async(coinId)=>{
       try {
         const  res = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`)
         return res.data
       } catch (error) {
          return error.code
       }
    }
   
 
   return <CoinsContext.Provider value={{data, fetchCoinById}}>
      {children}
    </CoinsContext.Provider>
 }

 export default CoinsContextProvider
