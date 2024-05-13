import React, { useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';

export default function SwipeableTemporaryDrawer() {
    const [Open, setOpen]= useState(false)
  return (
    <div>
      
          <Button onClick={()=> setOpen(true)}><MenuRoundedIcon/></Button>
          <SwipeableDrawer 
            anchor={'right'}
            open={Open}
            onClose={()=> setOpen(false)}
          >
        <div  className='p-6 flex flex-col gap-4 pr-10 pl-10 bg-black w-[40vw] h-screen'>
        <Link to={'/'}><p className="text-[var(--gray)] text-[1rem] hover:text-[var(--white)] transition-all ease-in-out duration-200 ">Home</p></Link>
        <Link to={'/Compare'}><p className="text-[var(--gray)] text-[1rem] hover:text-[var(--white)] transition-all ease-in-out duration-200 ">Compare</p></Link>
        <Link to={'/watchList'}><p className="text-[var(--gray)] text-[1rem] hover:text-[var(--white)] transition-all ease-in-out duration-200 ">watchList</p></Link>
        <Link to={'/dashboard'}><p className="text-[var(--gray)] text-[1rem] hover:text-[var(--white)] transition-all ease-in-out duration-200 ">Dashoboard</p></Link>
      </div>
          </SwipeableDrawer>
    </div>
  );
}
