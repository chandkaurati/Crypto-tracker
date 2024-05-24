import { CircularProgress } from '@mui/material'
import React from 'react'

function Loader() {
  return (
    <div className='flex justify-center items-center w-full h-full bg-black absolute text-[var(--blue)]'>
   <CircularProgress />  
    </div>
  )
}

export default Loader
