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
const { fetchCoinById } = useContext(CoinsContext);
const [coinData, setCointdata] = useState({});
const [Error, SetError] = useState(false);
const [marketData, setMarkteData] = useState({})
const {getMarkteData, chartData, loading} = useContext(CoinsContext)
const [days, setDays] = useState(7)

  useEffect(() => {
    async function getData(){
    const res = await getMarkteData(id, days)
    }
    getData()
  },[]);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  
  if (Error) {
    return <ErrorPage />;
  }

  return (
    <>
     <div className="max-w-full p-7">
     <h1>coin{id}</h1>
     <Select/>
     <LineChart data={chartData}/>
     </div>
    </>
  );
}

export default Coinpage;
