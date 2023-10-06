import React from 'react'

export default function Contact() {
  return (
    <div>
        <h2 className='h2 center'> CONTACT ME..</h2>
     
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
  )
}
