import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTelegram, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import '../styles/fifthSection.css';

const FifthSection = () => {
    return (
        <div className='fifth-section-container'>
            <div className='fifth-section-title'>Check out our socials!</div>
            <div className='fifth-socials-div'>
                <div className='fifth-x-div'>
                    <a className='fifth-x-link' href='https://x.com/DonalaCoin'><FontAwesomeIcon icon={faXTwitter} /> X/Twitter</a>
                </div>
                <div className='fifth-telegram-div'>
                    <a className='fifth-telegram-link' href='https://t.me/donalacoin'><FontAwesomeIcon icon={faTelegram} /> Telegram</a>
                </div>
            </div>
            <div className='disclaimer-div'>
                Legal Disclaimer: $Donala is a meme coin with no intrinsic value or expectation of financial return. $Donala does not serve a purpose nor does it have any affiliations. This project is for entertainment purposes only. By purchasing $Donala you are declaring that you have seen this disclaimer.
            </div>
        </div>
    );
};

export default FifthSection;
