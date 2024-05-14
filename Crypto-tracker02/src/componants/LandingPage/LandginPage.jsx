import React, { useContext } from 'react'
import iphone from '../../assets/iphone.png'
import gradiend from '../../assets/gradient.png'
import Button from '../Common/Button'
import {motion} from 'framer-motion'
import { CoinsContext } from '../../Context/CoinsContext'
import BackToTop from '../Common/BackToTop'

function LandginPage() {
  return (
   <div className='_container  px-12 flex flex-col sm:flex-row h-screen w-full'>
    <div className='right  border-red-600 w-full flex flex-col text-center sm:text-start '>
       <motion.h1 className='text_stroke leading-tight
        text-[2.4rem] sm:text-[6vw]
        md:text-[7vw] font-semibold 
        '
        initial={{opacity:0, y:50}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.5}}
        >Track Crypto</motion.h1>
       <motion.h1 className='leading-tight  text-[2.4rem] 
       sm:text-[6vw] md:text-[7vw] font-semibold
        text-blue-600'
        initial={{opacity:0, y:50}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.5, delay:0.5}}
        >Real Time</motion.h1>
       <motion.p className='text-[var(--gray)]'
        initial={{opacity:0, y:50}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.5, delay:1}}
       >track crypto through a public api check a dashboard to also!</motion.p>
       <motion.div className="btn-group flex gap-5
        justify-center sm:justify-normal
         mt-4"
         initial={{opacity:0, x:50}}
        animate={{opacity:1,x:0}}
        transition={{duration:0.5, delay:1.5}}
         >
        <Button text={'dashboard'}></Button>
        <Button text={'share'} outline={true}></Button>
       </motion.div>
    </div>
    <div className='left mt-10 flex justify-center sm:block border-yellow-300 w-full'>
      <motion.img className=' w-[180px] absolute 
       z-10 sm:absolute  sm:w-[180px]
        sm:right-8 md:w-[250px] md:right-10'
         src={iphone} alt="" 
         initial={{y:-25}}
         animate={{y:25}}
         transition={
          {
           type: "smooth",
           repeatType:"mirror",
           duration : 1.5,
           repeat: Infinity,
          }
        
        }
         />
      <img className=' w-[180px] absolute  sm:absolute sm:w-[170px] sm:right-5 md:w-[250px] md:right-7 ' src={gradiend} alt="" />
    </div>
    <BackToTop/>
   </div>
  )
}

export default LandginPage
