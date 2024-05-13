import React from "react";
import { Link } from "react-router-dom";
import SwipeableTemporaryDrawer from "../Common/Drawer";
import Button from "../Common/Button";

function Header() { 
  
  return (
    <div className="nav flex z-50 justify-between items-center px-[3rem] py-5 sticky top-0 left-0 bg-[var(--black)]">
      <h1 className="font-semibold text-xl md:text-3xl">
        CryptoTracker <span className="text-[var(--blue)]">.</span>
      </h1>
      <div className="links flex justify-end  items-center  gap-7">
        <Link className="hidden md:flex"  to={'/'}><p className="text-[var(--gray)] text-[1rem] hover:text-[var(--white)] transition-transform ease-in-out duration-200 ">Home</p></Link>
        <Link className="hidden md:flex" to={'/Compare'}><p className="text-[var(--gray)] text-[1rem] hover:text-[var(--white)] transition-transform ease-in-out duration-200 ">Compare</p></Link>
        <Link className="hidden md:flex" to={'/watchList'}><p className="text-[var(--gray)] text-[1rem] hover:text-[var(--white)] transition-transform ease-in-out duration-200 ">watchList</p></Link>
        <Link className="hidden md:flex" to={'/Dashboard'}><p className="text-[var(--gray)] text-[1rem] hover:text-[var(--white)] transition-transform ease-in-out duration-200 "><Button text={'Dashboard'}outline={false}></Button></p></Link>
      </div>

     <div className="mobile-menu block md:hidden">
      <SwipeableTemporaryDrawer/>  
     </div> 

    </div>


  );                                                                      
}

export default Header;
