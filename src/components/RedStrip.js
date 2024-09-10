// Navbar.js
import React from 'react';
import '../styles/redStrip.css';
import redStripImage from '../images/red_strip.png'


const RedStrip = () => {
    return (
        <div className='red-strip-container'>
            <div className='red-strip-wrapper'>
                <img className='red-strip-image' src={redStripImage}/>
            </div>
        </div>
    );
};

export default RedStrip;
