// Navbar.js
import React from 'react';
import logo from '../images/android-chrome-192x192.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTelegram, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import '../styles/navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='navbar-wrapper'>
                <div className="navbar-image-container">
                    <div className='logo-wrapper'>
                        <img className='space-kitty-logo' src={logo} />
                    </div>
                    <h1 className='logo-title'>Donala</h1>
                </div>
                <div className='navbar-nav-container'>
                    <ul className='nav-links-container'>
                        <li>About</li>
                        <li>How to Buy</li>
                        <li>Tokenomics</li>
                    </ul>
                </div>
                <div className='socials-and-buy-container'>
                    <div className="socials-container">
                        <div className='nav-socials-x'>
                            <FontAwesomeIcon icon={faXTwitter} />
                        </div>
                        <div className='nav-socials-telegram'>
                            <div className='telegram-backing'>

                            </div>
                            <FontAwesomeIcon className='telegram-icon' icon={faTelegram} />
                        </div>
                    </div>
                    <div className='navbar-buy-container'>
                        <h3>Buy $Donala</h3>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
