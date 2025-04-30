import React from 'react'
import LAYOUT from '../components/LAYOUT.JSX'
import  '../Pages/NotFound.css';

const NotFound = () => {
  return (
   <LAYOUT>
            <div className="not-found-container">
            <h1>404</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <a href="/" className="home-link">Go to Home</a>
        </div>
   </LAYOUT> 
  )
}

export default NotFound