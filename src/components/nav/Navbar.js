import React from 'react'
import './navbar.css'
import { MdOutlineHome } from "react-icons/md";


const Navbar = () => {
  return (
    <nav>

      <a href='#'><MdOutlineHome/></a>
      <a href='#about'><MdOutlineHome/></a>
      <a href='#experience'><MdOutlineHome/></a>
      <a href='#services'><MdOutlineHome/></a>
      <a href='#contact'><MdOutlineHome/></a>
      {/* <p className='new feats'>If you are inthe midst of the</p> */}

    </nav>

  
   )
}

export default Navbar
