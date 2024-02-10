import React from 'react'
import '../css/about.css'
import coverImg from '../assets/about_bg.png';

export default function About() {
  return (
    <>
        <div className='about-background' id='about'>
            <div className="grid-container">
                
                {/* cover image */}
                <img className='about-cover-img' src={coverImg} alt="Example" />

                <div className="about-paragraph">
                    
                    {/* heading text */}
                    <span className='about-heading'>
                        WHO <span className='mid'>WE</span> ARE
                    </span>

                    {/* paragraph */}
                    <p className='about-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui non sapien facilisis commodo. Sed rutrum lacus sed enim ultricies, ut congue lorem viverra. Nulla facilisi. Nunc in ante nec sapien congue fermentum. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                        <br></br><br></br>
                        Phasellus et suscipit velit. Vivamus id purus a elit bibendum lobortis. Fusce vulputate nunc vel purus tincidunt, et tempor libero luctus. Quisque ultricies consequat nulla, nec eleifend odio tempus et. Duis sit amet velit nisi. Nam nec risus ut risus sagittis condimentum. 
                    </p>
                </div>
                
            </div>
        </div>
    </>
  )
}
