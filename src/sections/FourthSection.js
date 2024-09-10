import React from 'react';
import '../styles/fourthSection.css';

const FourthSection = () => {
    return (
        <div className='fourth-section-container'>
            <div className='fourth-section-title'>
                <h2>Tokenomics</h2>
            </div>
            <div className='tokenomics-container'>
                <div className="contact-address-container">
                    <div className='contact-address-first'>
                        Contact Address:  Placeholder address
                    </div>
                    <div className='contact-address-second'>
                        <div className='contact-address-copy'>
                            <button className='copy-button-ca'>Copy</button>
                        </div>
                    </div>
                </div>
                <div className='tokenomics-rest-weapper'>
                    <div className='tokenomics-special-container'>
                        LP Burnt
                    </div>
                    <div className='tokenomics-special-container center-margin'>
                        Mint Revoked
                    </div>
                    <div className='tokenomics-special-container'>
                        0% Tax
                    </div>

                </div>
            </div>

        </div>
    );
};

export default FourthSection;
