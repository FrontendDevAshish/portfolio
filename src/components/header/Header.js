import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/coding.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <div>
      <header>
        <div className='container header__container'>
          <h5>Hello I'm</h5>
          <h1>John Doe</h1>
          <div className="header__title">
            MERN stack Developer
          </div>
          <CTA/>
          <HeaderSocials/>

          <div className='me'>
            <img className='me_img' src={ME} alt='my-image'/>
          </div>

          <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
      </header>
    </div>
  )
}

export default Header
