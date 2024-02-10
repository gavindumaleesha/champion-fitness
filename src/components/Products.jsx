import React from 'react';
import '../css/products.css';
import manImg from '../assets/man.png';
import womanImg from '../assets/woman.png';

export default function Products() {
  return (
    <>
      <div className="products-container" id='products'>

        {/* component heading */}
        <div>
          <span className='main-heading'>
            OUR &nbsp;&nbsp; <span className='mid-text'>PRODUCTS</span>
          </span>
        </div>

        {/* package section */}
        <div className="all-packs">

          {/* gents package */}
          <div className="gents-pack">
            <img className='man-img' src={manImg} alt="man-pack" />
          </div>

          <div className="man-details">
            <span className='sub-heading'>
              GENTS PACK
            </span>

            <span className='sub-details'>
              <ul>
                <li>Track Pants</li>
                <li>Training Shoes</li>
                <li>Water Bottle</li>
                <li>Gym Towel</li>
                <li>Performance Shirts</li>
                <li>Inner Wear</li>
              </ul>

              <ul className='quantity-list'>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>02</li>
                <li>02</li>
                <li>02</li>
              </ul>
            </span>

            <div className="item-price">
              <h2>10$ ONLY</h2>
            </div>

            {/* buy package button */}
            <button className="buy-button">
              BUY NOW
            </button>
          </div>

          {/* ladies package */}
          <div className="woman-details">
            <span className='sub-heading'>
              LADIES PACK
            </span>

            <span className='sub-details'>
              <ul>
                <li>Track Pants</li>
                <li>Training Shoes</li>
                <li>Water Bottle</li>
                <li>Gym Towel</li>
                <li>Performance Shirts</li>
                <li>Hair Band</li>
              </ul>

              <ul className='quantity-list'>
                <li>01</li>
                <li>01</li>
                <li>01</li>
                <li>02</li>
                <li>02</li>
                <li>02</li>
              </ul>
            </span>

            <div className="item-price">
              <h2>10$ ONLY</h2>
            </div>

            {/* buy package button */}
            <button className="buy-button-ladies">
              BUY NOW
            </button>
          </div>

          <div className="ladies-pack">
            <img className='woman-img' src={womanImg} alt="woman-pack" />
          </div>
        </div>

      </div>
    </>
  );
}
