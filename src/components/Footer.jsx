import React from 'react';
import '../css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <>
      <div className="footer-container" id='footer'>
        <div className="footer-grid">
          <div className="footer-about">
            <div className="footer-heading">
              <span>CHAMPION <span className='mid-footer-text'> FITNESS</span> COACHING</span>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui non sapien facilisis commodo. Sed rutrum lacus sed enim ultricies, ut congue lorem viverra. Nulla facilisi. Nunc in ante nec sapien congue fermentum.
            </p>
          </div>

            {/* contact detais */}
          <div className="footer-contact">
            <div className="footer-heading">
              <span>CONTACT <span className='mid-footer-text'>US</span></span>
            </div>

            <p>
              Email    - example@gmail.com <br />
              Phone    - +94 111 111 111 <br />
              Location - Colombo, Sri Lanka.
            </p>
          </div>

          <div className="footer-icons">
            <div className="footer-heading">
              <span>FOLLOW <span className='mid-footer-text'>US</span></span>
            </div>

            {/* footer icons */}
            <div className="icons">
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="mailto:example@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
          </div>
        </div>
      </div>

        {/* footer note */}
      <footer className="footer">
        <p>© 2024 Champion Fitness Coaching. All rights reserved.</p>
      </footer>
    </>
  );
}
