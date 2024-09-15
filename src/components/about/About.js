import React from 'react'
import './about.css'
import { MdOutlineBook, MdOutlineDesignServices, MdOutlineHome, MdOutlineMessage, MdOutlineVerifiedUser } from "react-icons/md";
import Code from "../../assets/coding.png"
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className='about __me'>
        
         <div className='about__me-image'>
         <div className='bg-color'>
         <img className='tilting' src={Code} alt = "About Image" />
         </div>
         </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <MdOutlineHome className ="about__icon"></MdOutlineHome>
              <h5>Experience</h5> 
              <small>2+ Years Working</small>
            </article>
            <article className='about__card'>
              <MdOutlineHome className ="about__icon"></MdOutlineHome>
              <h5>Clients</h5> 
              <small>2+ Years Working</small>
            </article>
            <article className='about__card'>
              <MdOutlineHome className ="about__icon"></MdOutlineHome>
              <h5>Projects</h5> 
              <small>2+ Years Working</small>
            </article>
          </div>
          <p>
          I am a passionate full-stack developer with over two years of experience in building dynamic and efficient web applications. On the frontend, I specialize in React JS, Next JS, and design frameworks like Bootstrap and Tailwind, while optimizing performance using Webpack and Babel. I have extensive experience with Redux and Redux Toolkit for state management in complex applications. On the backend, I’m proficient in Node.js and Express.js, designing scalable APIs and microservices, and I work with MongoDB to create robust databases. I thrive on solving challenges and delivering clean, maintainable code.
          </p>

        </div>
      </div>
    </section>
    
  )
}

export default About
