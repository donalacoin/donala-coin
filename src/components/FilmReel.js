// Navbar.js
import React from 'react';
import '../styles/filmReel.css';
import FilmReelImage from '../images/film_reel_2.png'


const FilmReel = () => {
    return (
        <div className='film-reel-container'>
            <div className='film-reel-wrapper'>
                <img className  ='film-reel-image' src={FilmReelImage} alt='Film Reel' />
            </div>
        </div>
    );
};

export default FilmReel;
