import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG1.jpg'
import IMG2 from '../../assets/IMG2.jpg'
import IMG3 from '../../assets/IMG3.jpg'
import IMG4 from '../../assets/IMG4.jpg'
import IMG5 from '../../assets/IMG5.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Data Dashboard',
    github: 'https://github.com',
    demo : 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 2,
    image: IMG1,
    title: 'E-commerce',
    github: 'https://github.com',
    demo : 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 3,
    image: IMG1,
    title: 'Todo List',
    github: 'https://github.com',
    demo : 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 4,
    image: IMG1,
    title: 'Crypto app',
    github: 'https://github.com',
    demo : 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 5,
    image: IMG1,
    title: 'Crypto app',
    github: 'https://github.com',
    demo : 'https://dribbble.com/Alien_pixels'
  },
  
]

const Portfolio = () => {
  return (
    <div>
      <section id='portfolio'>
        <h5>My Recent work</h5>
        <h2>Portfolio</h2>

        <div className='container portfolio__container'>
          {
            data.map(({id, image, title, demo, github}) =>{
              return (
            <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src = {image} alt={title} style={{borderRadius:'15px'}}/>
            </div>
            <h2>{title}</h2>
            <div className='portfolio__item-cta'>
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>)
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Portfolio
