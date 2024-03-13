import React from 'react'
import './navbar.css'
import { MdOutlineBook, MdOutlineDesignServices, MdOutlineHome, MdOutlineMessage, MdOutlineVerifiedUser } from "react-icons/md";
import { useState } from 'react';


const Navbar = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>

      <a href='#' className={activeNav === '0'?'active':''}><MdOutlineHome/></a>
      <a href='#about' className={activeNav === '0'?'active':''}><MdOutlineVerifiedUser/></a>
      <a href='#experience' className={activeNav === '0'?'active':''}><MdOutlineBook/></a>
      <a href='#services' className={activeNav === '0'?'active':''}><MdOutlineDesignServices/></a>
      <a href='#contact' className={activeNav === '0'?'active':''}><MdOutlineMessage/></a>
      

    </nav>

  
   )
}

export default Navbar
