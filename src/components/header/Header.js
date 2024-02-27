import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/gippy.jpg'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <div>
      <header>
        <div className='container header__container'>
          <h5>Hello I'm</h5>
          <h1>Ashish kumar</h1>
          <h5 className='text-light'>Frontend developer</h5>
          <CTA/>
          <HeaderSocials/>

          <div className='me'>
            <img src={ME} alt='my-image'/>
          </div>

          <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
      </header>
    </div>
  )
}

export default Header
