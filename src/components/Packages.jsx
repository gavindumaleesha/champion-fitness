import React from 'react';
import '../css/packages.css';
import basicImg from '../assets/basic.jpg';
import advanceImg from '../assets/advance.png';
import mealImg from '../assets/meal.jpg';

export default function Packages() {
  return (
    <>
      <div className="package-container" id='packages'>

        {/* heading */}
        <div>
          <span className='package-heading'>
            OUR <span className='mid'>COACHING</span> PACKAGES
          </span>
        </div>

        {/* package cards */}
        <div className="package-card-container">
          <div className="package-card">
            <img className='cover-img' src={basicImg} alt="coaching-session" />

            <div className="topic-container">
              <span className='package-topic'>
                BASIC <span className='mid'>COACHING</span> <br></br>PACKAGE
              </span>

              <button className="small-button">Learn More</button>
            </div>
          </div>

          <div className="package-card">
            <img className='cover-img' src={advanceImg} alt="virtual-session" />

            <div className="topic-container">
              <span className='package-topic'>
                ADVANCED <span className='mid'>COACHING</span> <br></br>PACKAGE
              </span>

              <button className="small-button">Learn More</button>
            </div>
          </div>

          <div className="package-card">
            <img className='cover-img' src={mealImg} alt="meal-guide" />

            <div className="topic-container">
              <span className='package-topic'>
                MEAL <span className='mid'>COACHING</span> <br></br>PACKAGE
              </span>

              <button className="small-button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
