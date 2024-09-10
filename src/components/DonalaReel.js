// Navbar.js
import React from 'react';
import '../styles/donalaReel.css';
import Donala from '../images/donala.PNG'


const DonalaReel = () => {
    return (
        <div className='donala-reel-container'>
            <img className='donala-image' src={Donala} alt='Donala'/>
            <img className='donala-image' src={Donala} alt='Donala'/>
            <img className='donala-image' src={Donala} alt='Donala'/>
            <img className='donala-image' src={Donala} alt='Donala'/>
            <img className='donala-image' src={Donala} alt='Donala'/>
        </div>
    );
};

export default DonalaReel;
