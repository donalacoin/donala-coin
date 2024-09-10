import React from 'react';
import '../styles/thirdSection.css';

const ThirdSection = () => {
    return (
        <div className='third-section-container'>
            <div className='third-section-title'><h2>How to Buy $DONALA</h2></div>
            <div className='how-to-buy'>
                <div className='buy-item'>
                    <div className='buy-number-container'>
                        <div className='buy-number'>1</div>
                    </div>
                    <div className='buy-description'>Have or create a Phantom wallet.</div>
                </div>
                <div className='buy-item'>
                    <div className='buy-number-container'>
                        <div className='buy-number'>2</div>
                    </div>
                    <div className='buy-description'>Send $Sol to your Phantom wallet. </div>
                </div>
                <div className='buy-item'>
                    <div className='buy-number-container'>
                        <div className='buy-number'>3</div>
                    </div>
                    <div className='buy-description'>Go to Raydium and connect your wallet. </div>
                </div>
                <div className='buy-item'>
                    <div className='buy-number-container'>
                        <div className='buy-number'>4</div>
                    </div>
                    <div className='buy-description'>Swap $SOL for $DONALA.</div>
                </div>
                <div className='buy-item'>
                    <div className='buy-number-container'>
                        <div className='buy-number'>5</div>
                    </div>
                    <div className='buy-description'>Interact with our community!</div>
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;
