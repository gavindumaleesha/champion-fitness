import React from 'react';
import '../css/banner.css';
import { Link } from 'react-scroll';

export default function Banner() {
    return (
        <div className="banner-container">
            <div className='banner-text'>
                {/* heading */}
                <span className='banner-heading'>
                    UNLOCK YOUR POTENTIAL <br />
                    TRANSFORM YOUR <span className='banner-mid-text'>FITNESS</span>
                </span>

                {/* buttons */}
                <div className="button-container">
                    <button className="large-button-solid"><Link to="about" smooth={true} duration={1000}>START YOUR JOURNEY</Link></button>
                    <button className="large-button-light"><Link to="footer" smooth={true} duration={1000}>GET IN TOUCH WITH US</Link></button>
                </div>
            </div>
        </div>
    );
}
