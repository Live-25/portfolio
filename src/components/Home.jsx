import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

export default function Home() {
  return (
   
     <div className='home'> 
     <Navbar />
      <h1 className='heading zoom'> Hi, I am Liveleen !</h1>
      <h3 className='tagline'> I'm a <span>Front-end Developer | </span></h3>
      <div className='ul'>
            <i className="fa-brands fa-instagram fa-2xl icon-color  animate__animated zoom"></i>
            <i className="fa-brands fa-github fa-2xl icon-color  animate__animated zoom"></i>
            <i className="fa-brands fa-linkedin-in fa-2xl icon-color animate__animated zoom"></i>
        </div>
        <div className='home-about'>
        <h2 className=' h2 center' style={{fontSize:'3rem' }}> About me </h2>
          <p className='p-about'> Hello! I'm Liveleen Kaur, a dedicated web developer on a mission to craft immersive digital experiences. 
        I'm deeply passionate about web development.
        When I'm not immersed in lines of code, you can find me journaling , reading books or involved in art.
        These pursuits not only recharge my creativity but also inspire innovative solutions in my work.
        I believe in the power of the web to connect people and ideas, and 
        I'm committed to contributing positively to this interconnected world. </p>

        <button className='home-about-btn1 zoom'> <a className="home-about-btn" href='/about'> Know more </a>  </button>
        </div>
        <Footer />
      
      </div>
      
      
        /* 
        
    </div> */
    
    /* HAS ISSUE*/


  )
}
