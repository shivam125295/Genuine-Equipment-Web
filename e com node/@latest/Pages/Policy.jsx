import React from 'react'
import LAYOUT from '../components/LAYOUT.JSX'
import './Policy.css'

const Policy = () => {
  return (
   <LAYOUT>

<div className="about-container">
            <div className="about-content">
                <img src={img2} alt="About Us" className="about-image" />
                <div className="about-text">
                    <h1>POLICY</h1>
                    <p>
                        Welcome to our website! We are committed to providing the best services
                        to our customers. Our team is dedicated to delivering high-quality products
                        and exceptional customer service.
                    </p>
                </div>
            </div>
        </div>

   </LAYOUT> 
  )
}

export default Policy