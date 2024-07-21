import React from 'react'
import './testimonials.css'
import Gippy from '../../assets/gippy.jpg'

const Testimonials = () => {
  const data =  [
    {
      avatar:Gippy,
      name:'Lilly aldrin',
      review: 'lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum '
    },
    {
      avatar:Gippy,
      name:'Lilly aldrin',
      review: 'lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum '
    },
    {
      avatar:Gippy,
      name:'Lilly aldrin',
      review: 'lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum '
    },
    {
      avatar:Gippy,
      name:'Lilly aldrin',
      review: 'lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum '
    },
    {
      avatar:Gippy,
      name:'Lilly aldrin',
      review: 'lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum '
    },
    {
      avatar:Gippy,
      name:'Lilly aldrin',
      review: 'lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum lorem dolor ipsum '
    }
  ]

  return (
    <section id ='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className='testimonials__container'>
        {
          data.map(({avatar,name,review},index) =>{
            return(
              <article key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt='avatar one'/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
              {review}
              </small>

              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials
