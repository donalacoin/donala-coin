import React from 'react';
import redStripBottom from '../images/red_strip_bottom.PNG'
import redStripTop from '../images/red_strip.png'
import Raydium from '../images/raydium_clear.png'
import DexScreener from '../images/dex_screener.png'
import '../styles/thirdSection.css';

const ThirdSection = () => {
    const handleDexScreenerClick = () => {
        window.open('https://dexscreener.com/solana/95dxkmfttn3czd9ha9ujvkh4q1qjaoyeeq6wmjbw471z', '_blank')
    }

    const handleRaydiumClick = () => {
        window.open('https://raydium.io/swap/?outputMint=5Ba8Q1cNSqBgbW2LPenzmP7Rjgu7F6fTDEE8Dw7taebi&inputMint=sol', '_blank')
    }

    return (
        <div id='how' className='third-section-container'>
            <img className='red-strip-top' src={redStripTop} />
            <div className='third-section-title'><h2>How to Buy $DOMALA</h2></div>
            <div className='third-section-wrapper'>
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
                        <div className='buy-description'>Swap $SOL for $DOMALA.</div>
                    </div>
                    <div className='buy-item'>
                        <div className='buy-number-container'>
                            <div className='buy-number'>5</div>
                        </div>
                        <div className='buy-description'>Interact with our community!</div>
                    </div>
                </div>
                <div className='third-buy-ca'>
                    <div className='third-buy-ca-wrapper'>
                        <div className='third-button-container dexscreener' onClick={handleDexScreenerClick}>
                            <img className='raydium-logo' src={DexScreener}></img>
                            View on Dexscreener
                        </div>
                        <div className='third-button-container' onClick={handleRaydiumClick}>
                            <img className='raydium-logo' src={Raydium}></img>
                            Buy on Raydium
                        </div>
                        <div className='third-contact-address'>
                            CA: 5Ba8Q1cNSqBgbW2LPenzmP7Rjgu7F6fTDEE8Dw7taebi
                        </div>

                    </div>
                </div>
            </div>
            <img className='red-strip-bottom' src={redStripBottom} />
        </div>
    );
};

export default ThirdSection;
