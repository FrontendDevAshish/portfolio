import React from 'react'
import './navbar.css'
import { MdOutlineBook, MdOutlineDesignServices, MdOutlineHome, MdOutlineMessage, MdOutlineVerifiedUser } from "react-icons/md";
import { useState } from 'react';


const Navbar = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>

      <a href='#' className={activeNav === '0'?'active':''}><MdOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about'?'active':''}><MdOutlineVerifiedUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience'?'active':''}><MdOutlineBook/></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services'?'active':''}><MdOutlineDesignServices/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact'?'active':''}><MdOutlineMessage/></a>
      

    </nav>

  
   )
}

export default Navbar
