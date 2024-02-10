import React from 'react';
import '../css/services.css';
import coachImg from '../assets/coach.jpg';
import virtualImg from '../assets/virtual.jpg';
import mealImg from '../assets/meal.jpg';

export default function Services() {
  return (
    <>
      <div className="container" id='services'>

        {/* heading */}
        <div>
          <span className='heading'>
            WHAT <span className='mid'>WE</span> PROVIDE
          </span>
        </div>


        {/* services cards */}
        <div className="card-container">
          <div className="card">
            <img className='cover-img' src={coachImg} alt="coaching-session" />
            <div className="topic-container">
              <span className='topic'>
                PERSONAL <span className='mid'>WORKOUT</span> <br></br>PLANS
              </span>
            </div>
          </div>

          <div className="card">
            <img className='cover-img' src={virtualImg} alt="virtual-session" />
            <div className="topic-container">
              <span className='topic'>
                VIRTUAL <span className='mid'>COACHING</span> <br></br>SESSIONS
              </span>
            </div>
          </div>

          <div className="card">
            <img className='cover-img' src={mealImg} alt="meal-guide" />
            <div className="topic-container">
              <span className='topic'>
                NUTRITIONAL <span className='mid'>MEAL</span> <br></br>PLANS
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
