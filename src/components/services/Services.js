import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User-centered design: Creating digital products that are intuitive and enjoyable to use.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Wireframing and prototyping: Building interactive prototypes to visualize the user experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Visual design: Crafting visually appealing interfaces with a focus on typography, color, and layout.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive design: Ensuring your website or app looks great on any device.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Accessibility: Making sure your designs are inclusive and usable by everyone.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Conducting user tests to identify and address any usability issues.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Frontend development: Building interactive user interfaces using HTML, CSS, and JavaScript.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Backend development: Creating the server-side logic for your web applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database design: Structuring data effectively to support your application's functionality.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>API integration: Connecting your application to external data sources.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Performance optimization: Making your website load quickly and run smoothly.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Maintaining code quality with version control and testing strategies.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Providing ongoing maintenance and support for long-term project success.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Security best practices: Protecting your application from vulnerabilities.</p>
            </li>

          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>SEO Optimization</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Keyword research: Identifying the most relevant keywords for your target audience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>On-page optimization: Optimizing your website's content and HTML to improve search engine rankings.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Technical SEO: Addressing technical issues that can hinder your website's search engine visibility.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Link building: Acquiring high-quality backlinks to your website.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Local SEO: Optimizing your website for local search results.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content marketing: Creating valuable content to attract & engage your audience.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;