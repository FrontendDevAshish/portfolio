import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG1.jpg'
import IMG2 from '../../assets/IMG2.jpg'
import IMG3 from '../../assets/IMG3.jpg'
import IMG4 from '../../assets/IMG4.jpg'
import IMG5 from '../../assets/IMG5.jpg'
import IMG6 from '../../assets/IMG6.jpg'



const Portfolio = () => {
  return (
    <div>
      <section id='portfolio'>
        <h5>My Recent work</h5>
        <h2>Portfolio</h2>

        <div className='container portfolio__container'>
          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={IMG1} alt=''/>
            </div>
            <h3>This is a portfolio item title</h3>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>
          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
            <img src={IMG2} alt=''/>
            </div>
            <div className='portfolio__item-image'>
            <img src={IMG2} alt=''/>
            </div>
            <div className='portfolio__item-image'>
            <img src={IMG2} alt=''/>
            </div>
            <div className='portfolio__item-image'>
            <img src={IMG2} alt=''/>
            </div>
            <div className='portfolio__item-image'>
            <img src={IMG2} alt=''/>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
