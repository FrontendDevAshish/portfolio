import React from 'react'
import './navbar.css'
import { MdOutlineBook, MdOutlineDesignServices, MdOutlineHome, MdOutlineMessage, MdOutlineVerifiedUser } from "react-icons/md";
import { useState } from 'react';


const Navbar = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>

      <a href='#' className={activeNav === '0'?'active':''}><MdOutlineHome/></a>
      <a href='#about'><MdOutlineVerifiedUser/></a>
      <a href='#experience'><MdOutlineBook/></a>
      <a href='#services'><MdOutlineDesignServices/></a>
      <a href='#contact'><MdOutlineMessage/></a>
      

    </nav>

  
   )
}

export default Navbar
