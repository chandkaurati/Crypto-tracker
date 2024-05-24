import React from 'react'
import Button2 from '../Common/Button2'
import {motion} from 'framer-motion'

function LandinPage2() {
  return (
    <>
    <div className='h-screen w-full
     bg-hero-pattern pt-20
     bg-cover flex flex-col'>

    <div className=' flex flex-col items-center justify-center gap-8'>
      <span className='text flex flex-col  justify-center items-center gap-4 '>
        <motion.h1 className='text-[7vw]
         md:text-[5vw] px-2
         font-bold text-center'
         initial={{opacity:0, y:50}}
         animate={{opacity:1,y:0}}
         transition={{duration:0.5}}
         >
        Buy, sell and trade crypto <br />
        like never before
        </motion.h1>
        <motion.p className='text-center sm:w-[400px] md:w-[400px] 
        px-6'
        initial={{opacity:0, y:50}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.5, delay:0.5}}
        >Lorem ipsum dolor sit amet,
        consectetur adipiscing elit elit, a, eget tristique metus,
         turpis vestibulum, pretium donec cras at sit et, etiam ac venenatis ut
          eu eu eu sollicitudin.
        </motion.p>
      </span>
      <motion.span className='__buttons flex flex-col 
      sm:flex-row gap-4 justify-center px-3'
      initial={{opacity:0, y:50}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.5, delay:0.9}}
      >
        <Button2 text={"Get Started"}/>
        <Button2 text={"Learn More"}/>
      </motion.span>
    </div>

    </div>
    </>
  )
}

export default LandinPage2
