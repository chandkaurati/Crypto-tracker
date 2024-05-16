import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CoinsContext } from '../Context/CoinsContext'
import { useContext } from 'react'
import ErrorPage from './ErrorPage'
import { FilteredCoinData } from '../functions/CoinData'
function Coinpage() { 
    const {id} = useParams()
    const {fetchCoinById} = useContext(CoinsContext)
    const [coinData, setCointdata] = useState({})
    const [Error, SetError] = useState(false)
    useEffect(()=>{
      if(id){
         fetchCoinById(id).then((val)=>{
          if(val === 'ERR_BAD_REQUEST'){
            SetError(true)
            return
          }
          FilteredCoinData(setCointdata,val)
        })
      } 
    },[id])  

    console.log(coinData)
    return (
    <>
     COIN :{id}
    </>
    )
  
}

export default Coinpage
