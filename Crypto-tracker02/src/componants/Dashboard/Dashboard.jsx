import React, { useContext, useEffect, useState } from 'react'
import LabTabs from '../Common/Tabs'
import axios  from 'axios'
import Search from '../Common/Search'
import PaginationControlled from '../Common/Pagination'
import { CoinsContext } from '../../Context/CoinsContext'
import Loader from '../Common/Loader'
import BackToTop from '../Common/BackToTop'
function Dashboard() {
const [search, setSearch] = useState('')
const [page, setPage] =  useState() 
const [isLoading, setLoadinig] = useState(false)
const {data} = useContext(CoinsContext)

const onSearchange = (e)=>{
   e.preventDefault()
   setSearch(e.target.value)
}

const searcCoin = data.filter(
  (coin)=> coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search)
)

useEffect(()=>{
  data.length == 0 ? setLoadinig(true) : setLoadinig(false)
},[data])

if(isLoading){
   return <Loader/>
}else{
  return (
    <>
    <BackToTop/>
    <Search search={search} event={onSearchange}/>
     <div>
     <LabTabs coins={searcCoin}/>
    </div>
     <div className='flex w-full items-center justify-center h-10 p-20'>
      {!isLoading && <PaginationControlled/>}
     </div>
    </>
  )
}

}

export default Dashboard
