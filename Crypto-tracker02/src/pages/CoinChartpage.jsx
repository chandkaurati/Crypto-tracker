import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CoinsContext } from "../Context/CoinsContext";
import ErrorPage from "./ErrorPage";
import { FilteredCoinData } from "../functions/CoinData";
import Loader from "../componants/Common/Loader";
import CoinList from "../componants/Common/CoinList";
import axios from "axios";
import LineChart from "../componants/Chart/LineChart";
import { Convertdate } from "../functions/ConvertDate";
import Select from "../componants/Common/Select";
 
function Coinpage() {

const { id } = useParams();
const {getMarkteData,} = useContext(CoinsContext)
const [loading, setLoading] = useState(true)
const [Error, setError] = useState(false)
const [chartData, setChartData] = useState({
  labels: [],
  datasets: [
    {
      label: "Market Data",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [],
    },
  ],
});

const [days, setDays] = useState(30)
useEffect(()=>{

 const fetchMarketData = async()=>{
  try {
    const data = await getMarkteData(id, days)
    const prices = data?.prices ?? [];
    console.log(prices)
    const dates =  prices.map(subarr=> Convertdate(subarr[0]))
    if(prices){
       setChartData({
         labels : dates,
         datasets : [
  
        {
        label: "Market Data",
        borderColor: "#3a80e9",
        borderWidth : 2,
        tension : 0.5,
        backgroundColor: "#3a80e9",
        pointRadius:0,
        data: prices.map(el=> el[1]),
        } 
  
         ]
       })
    }
    setLoading(false)
  } catch (error) {
    setError(true)
  }
  // console.log(dates)
 }
 fetchMarketData()
},[id, days])

if(loading){
   return (
    <>
    <Loader/>
    </>
   )
}
return ( 
  <>
  <Select setDays={setDays} days={days}/>
  <div className="chart-wrapper bg-[var(--darkgray)]">
  <LineChart data={chartData}/>
  </div>
  </>
)
}

export default Coinpage;

