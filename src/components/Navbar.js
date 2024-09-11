// Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import logo from '../images/android-chrome-192x192.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTelegram, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import '../styles/navbar.css';


const Navbar = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };

    return (
        <nav className="navbar">
            <div className='navbar-wrapper'>
                <div className="navbar-image-container" onClick={scrollToTop}>
                    <div className='logo-wrapper'>
                        <img className='donala-logo' src={logo} />
                    </div>
                    <h1 className='logo-title'>Domala</h1>
                </div>
                <div className='navbar-nav-container'>
                    <ul className='nav-links-container'>
                        <li><Link to='about' smooth={true} duration={300}>About</Link></li>
                        <li><Link to='how' smooth={true} duration={300}>How to Buy</Link></li>
                        <li><Link to='tokenomics' smooth={true} duration={300}>Tokenomics</Link></li>
                    </ul>
                </div>
                <div className='socials-and-buy-container'>
                    <div className="socials-container">
                        <div className='nav-socials-x'>
                            <a href='https://x.com/DomalaCoin'><FontAwesomeIcon icon={faXTwitter} /></a>
                        </div>
                        <div className='nav-socials-telegram'>
                            <div className='telegram-backing'>

                            </div>
                            <a href='https://t.me/domalacoin'><FontAwesomeIcon className='telegram-icon' icon={faTelegram} /></a>
                        </div>
                    </div>
                    <div className='navbar-buy-container'>
                        <h3><a href='https://raydium.io/swap'>Buy $Domala</a></h3>
                    </div>
                </div>
                {/* <div className='hamburger-menu'>

                </div>
                <div className='nav-dropdown'>
                    <ul className='dropdown-links'>
                        <li>About</li>
                        <li>How to Buy</li>
                        <li>Tokenomics</li>
                    </ul>
                    <div className='dropdown-socials'>
                        <div className='dropdown-x'>
                            <a href='#'><FontAwesomeIcon icon={faXTwitter} /></a>
                        </div>
                        <div className='dropdown-telegram'>
                            <a href='#'><FontAwesomeIcon icon={faTelegram} /></a>
                        </div>
                    </div>
                    <div className='dropdown-buy'><a href='#how'>Buy $Donala</a></div>
                </div> */}
            </div>
        </nav>
    );
};

export default Navbar;
