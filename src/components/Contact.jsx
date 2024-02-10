import React from 'react'
import '../css/contact.css'
import contactImg from '../assets/contact.png';

export default function Contact() {
  return (
    <div className="contact-component" id='contact'>
        
        <div className="contact-grid">
            

            <div className="form">

                {/* heading */}
                <span className='contact-heading'>
                    ASK  <span className='mid'>ANY</span> QUESTION
                </span>

                {/* form */}
                <form className='form'>
                    <div className='basic-details'>
                        <input
                        type="text"
                        name="name"
                        placeholder='Enter Name'
                        
                        />

                        <input
                        type="text"
                        name="contactNumber"
                        placeholder='Enter Contact Number'
                        />
                    </div>
                    
                    <div className='email'>
                        <input
                        type="email"
                        name="email"
                        placeholder='Enter Email Address'
                        />
                    </div>
                    <div>
                        <textarea
                        name="questions"
                        placeholder='Type Your Question Here....'
                        />
                    </div>
                    
                    {/* form button */}
                    <button>SUBMIT</button>
                </form>
            
            </div>

            {/* image */}
            <div className="bg-img">
                <img className='contact-cover-img' src={contactImg} alt="Example" />
            </div>
        </div>
    </div>
  )
}
