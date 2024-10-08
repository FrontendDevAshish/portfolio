import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Aloha!</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>

      <a href='https://facebook.com'><FaFacebook/></a>
      <a href='https://facebook.com'><FaFacebook/></a>
      <a href='https://facebook.com'><FaFacebook/></a> 
      </div>
      <div className='footer__copyright'>
        <samll> Frontend_Dev : " Ashish Kumar " </samll>
      </div>
    </footer>
  )
}

export default Footer
