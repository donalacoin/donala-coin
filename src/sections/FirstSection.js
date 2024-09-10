// Navbar.js
import React from 'react';
import TrumpHarrisKissing from '../images/trump_harris_kissing.png'
import '../styles/firstSection.css';



const FirstSection = () => {
    return (
        <div className='first-section-container'>
            <div className='first-section-wrapper'>
                <div className='first-section-image-container'>
                    <img className='first-section-image' src={TrumpHarrisKissing} alt='Trump and Harris Kissing'/>
                </div>
                <div className='first-section-text-one'>
                    <h1>Donald + Kamala</h1>
                </div>
                <div className='first-section-text-two'>
                    <h2>America has never been sexier!</h2>
                </div>
            </div>
        </div>
    );
};

export default FirstSection;
