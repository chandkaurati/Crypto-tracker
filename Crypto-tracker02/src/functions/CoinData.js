import { useState } from "react"

export const FilteredCoinData = (setState, data)=>{
    setState({
     id: data.id,
     name: data.name,
     symbol: data.symbol,
     image : data.image,
     des : data.description,
     price_change_percentage_24h : data.market_data.price_change_percentage_24h,
     total_volume : data.market_data.total_volume.usd,
     markte_cap  : data.market_data.total_volume,
     current_price: data.market_data.current_price.usd
    })
}