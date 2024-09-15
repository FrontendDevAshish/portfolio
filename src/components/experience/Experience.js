import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './Experience.css'
const Experience = () => {
  return (
    <section id='experience'>
    <h5>What skills I have</h5>
    <h2>My Experience</h2>

    <div className='container experience__container'>
      <div className='experience__frontend'>
        <h3>Frontend Development</h3>
        <div className='experience__content'>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>HTML5</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>CSS3</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Javascript</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>React js</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Next js</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Redux Toolkit</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Tailwind css</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Shadcn</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
        </div>
      </div>
      <div className='experience__backend'>
      <h3>Backend Development</h3>
      <div className='experience__content'>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Node Js</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Express Js</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>MongoDB</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>SQL</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Neo4j</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>AWS</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Azure</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Experience
