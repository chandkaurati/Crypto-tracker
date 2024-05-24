import { Drawer } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import SwipeableTemporaryDrawer from '../Common/Drawer'
import Button2 from '../Common/Button2'

function Header2() {
  return (
    <div className='flex justify-between py-3 px-6 bg-black items-center sticky  top-0'>
        <Link to={'/'}><img className='w-[170px] md:w-[250px]' src="https://assets-global.website-files.com/62ea94aa50fb59ad3ea476f0/62ead07c4e3c0613c01dd91c_logo-cryptocurrency-template.svg" alt="" /></Link>
        <div className="__navitems hidden md:flex md:gap-12">
            <Link to={'/'}><p>Home</p></Link>
            <Link><p>About</p></Link>
            <Link><p>Blog</p></Link>
            <Link><p>Resources</p></Link>
        </div>


        <div className='hidden md:block'>
        <Link to={'/dashboard'}> <Button2 text={"Dashboard"} bgColor={"black"}/></Link>
        </div>
 
        {/* Mobile menu Draws */}
      <div className='block md:hidden'>
      <SwipeableTemporaryDrawer/>
      </div>

    </div>
  )
}

export default Header2
