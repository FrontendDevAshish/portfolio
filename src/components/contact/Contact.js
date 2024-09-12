import React, { useRef } from 'react';
import { FaMedium, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef(); 

  const sendEmail = (e) => {
    console.log(form,'this is the form data');
    e.preventDefault();
    
    emailjs.sendForm('service_vv112ph', 'template_unn04wu', form.current, '8uSO1kxfjDcqglhx2')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dev.frontend.ashish@gmail.com</h5>
            <a href="mailto: dev.frontend.ashish@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <FaMedium className="contact__option-icon" />
            <h4>Medium</h4>
            <h5>dev.frontend.ashish@gmail.com</h5>
            <a href="" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone+917703864693" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}> 
          <input
            type="text"
            name="name"  
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"  
            placeholder="Your Email"
            required
          />
          <textarea
            name="Message"  
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
