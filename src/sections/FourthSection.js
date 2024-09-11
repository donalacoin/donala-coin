import React, {useState} from 'react';
import '../styles/fourthSection.css';

const FourthSection = () => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText("Text to copy")
        .then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset the message after 2 seconds
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
    };


    return (
        <div id='tokenomics' className='fourth-section-container'>
            <div className='fourth-section-title'>
                <h2>Tokenomics</h2>
            </div>
            <div className='tokenomics-container'>
                <div className="contact-address-container">
                    <div className='contact-address-first'>
                        Contact Address:  Aq7FFA33NyHvVem8BsFGPgxL9odxkBEG2Wy7Pk6xJP1o
                    </div>
                    <div className='contact-address-second'>
                        <div className='contact-address-copy'>
                            {/* {isCopied && <p>Copied!</p>} */}
                            <button className='copy-button-ca' onClick={copyToClipboard}>{isCopied ? "Copied!" : "Copy"}</button>
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
