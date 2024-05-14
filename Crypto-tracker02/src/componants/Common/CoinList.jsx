import React from 'react'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
function CoinList({coin}) {
  return (
   <tr className='flex px-3 flex-wrap justify-between bg-[var(--darkgray)] m-3 rounded-full '>
     <td
      className=" flex w-[20%]
      justify-start items-center gap-[1.2rem]
     "
      >
        <img
          className="
         h-[3rem] w-[3rem]
        "
          src={coin.image}
          alt=""
        />

        <div className="flex flex-col gap-2">
          <p className="uppercase text-white font-semibold">{coin.symbol}</p>
          <p className="text-[var(--gray)] font-light">{coin.name}</p>
        </div>
      </td>

      <td className="flex  gap-0  w-[20%] items-center justify-start">
        <div className={coin.price_change_24h>0? " price_chip transition-all ease-in-out duration-300 hover:text-white hover:bg-green-500 border border-green-500 rounded-[2rem] px-6 py-1 text-center font-semibold text-sm text-green-600 m-5" : " `price_chip transition-all ease-in-out duration-300 border border-red-500 rounded-[2rem] px-6 py-1 hover:text-white hover:bg-red-500 text-center font-semibold text-sm text-red-500 m-5"}>{coin.price_change_24h.toFixed(2)}%</div>
         {coin.price_change_24h >0 ?  <div className="price_chip transition-all ease-in-out duration-300 hover:text-white hover:bg-green-500 border border-green-500 rounded-[2rem] px-3 py-[0.5rem]] text-center font-semibold text-sm text-green-600 m-5"><TrendingUpRoundedIcon/></div> :  <div className="price_chip transition-all ease-in-out duration-300 hover:text-white hover:bg-red-500 border border-red-500 rounded-[2rem] px-3 py-[0.5rem]] text-center font-semibold text-sm text-red-600 m-5"><TrendingDownRoundedIcon/></div> }
      </td>

      <td className="text-[var(--gray)] flex justify-between items-center  w-[60%]  p-3 ">
       <p className="text-[var(--white)]">$price {coin.current_price.toLocaleString()}</p>
       <p>Market Cap: {coin.market_cap.toLocaleString( )}</p>
       <p>total volume: {coin.total_volume.toLocaleString( )}</p>
      </td>
   </tr>
  )
}

export default CoinList
