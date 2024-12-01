import React from 'react'
import { FaBehanceSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";

const Contact = () => {
  return (
    <>
    <div className='contact'>
      <h2>Contact Me</h2>
      <div className='contact-section'>
        <div className='contact-details'>
        <MdEmail />
          <h3>Email</h3>
          <p>mianzroaming@gmail.com</p>
        </div>
        <div className='contact-details'>
        <IoLogoLinkedin />
          <h3>Linkedin Profile</h3>
          <p><a href="www.linkedin.com/in/mia-lamerton-2a202b304"> www.linkedin.com/in/mia-lamerton-2a202b304</a></p>
        </div>
        <div className='contact-details'>
        <FaBehanceSquare />
          <h3>Behance</h3>
          <p><a href="https://www.behance.net/mialamerton">https://www.behance.net/mialamerton </a></p> 
        </div>
      </div>
    </div>
    
    
    </>
  )
}

export default Contact
