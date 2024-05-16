import React, { useEffect, useState } from 'react'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';


function BackToTop() {
 const [isVisible, setIsvisible] = useState(false)
console.log(window.screenTop)
 const toggleVisibility = ()=>{
   if(window.screenTop > 300){
     setIsvisible(true)
   }else{
     setIsvisible(false)
   }
 }
 
 const scrollToTop  = ()=>{
   window.scrollTo({
    top:0,
    behavior:'smooth'
   })
 }
  window.addEventListener('scroll', toggleVisibility )
  return (
    <div className={` ${isVisible && 'text-[var(--blue)] fixed  w-[3rem] h-[3rem] border flex  border-white justify-center items-centerright-10 bottom-20 rounded-full' } hidden `}
     >
    <ArrowUpwardRoundedIcon/> 
    </div>
  )
}

export default BackToTop
