import Navbar from './Navbar'
import React from 'react'
import Footer from './Footer'

export default function Contact() {
  return (

        <div>
        <Navbar />
        <div className="contact">
        <h4 className='icons light-colour-navbar'> Get in touch with me through:</h4>
        <h5 className="connect"><i className="fa-brands fa-instagram fa-xl zoom" style={{ color: '#707275' }}> </i> <a href="https://www.instagram.com/liveleenn" className='connect'> Instagram </a><br /> </h5>
        <h5 className="connect">  <i className="fa-brands fa-github fa-xl zoom" style={{ color: '#707275' }} > </i> <a href="https://github.com/Live-25" className='connect'> Github</a> <br /> </h5>
        <h5 className="connect">  <i className="fa-brands fa-linkedin-in fa-xl zoom" style={{ color: '#707275' }}> </i><a href="https://www.linkedin.com/in/liveleen-kaur-4b4033248" className='connect'>  LinkedIn</a> <br /></h5>
        <h5 className="connect">  <i className="fa-solid fa-envelope fa-xl zoom" style={{ color: '#707275' }}> </i> <a href="mailto:liveleen25@gmail.com" className='connect'> liveleen25@gmail.com</a> <br /></h5>
        </div>
        <Footer />
        </div> 
  
  )
}

/* SLIGHT ISSUE */
