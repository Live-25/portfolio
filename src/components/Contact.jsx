
import React from 'react'

export default function Contact() {
  return (
    <div className='contact'>
    <div> 
        <h2 className='h2 center large-text'> CONTACT ME..</h2>
     
            <form action="/" method="post" className='contact-form'>
            <label  for="name">Name:</label> <br />
            <input type="text" id="name" name="name" required /> <br />

            <label for="email">Email:</label> <br />
            <input type="email" id="email" name="email" required /> <br />

            <label for="message">Message:</label> <br />
            <textarea id="message" name="message" required></textarea> <br />

            <button type="submit">Submit</button>  
        </form>  
        </div>
        <div>
          <h4 className=' center icons'> Or Connect through :</h4>
          <h4 > 
          <i className="fa-brands fa-instagram fa-xl icons zoom" style={{ color: '#707275' }}> </i> Instagram <br /> 
            <i className="fa-brands fa-github fa-xl icons zoom" style={{ color: '#707275' }} > </i> Github <br />
            <i className="fa-brands fa-linkedin-in fa-xl icons" style={{ color: '#707275' }}> </i> LinkedIn<br />
          </h4>
        </div>
    </div>
  )
}
