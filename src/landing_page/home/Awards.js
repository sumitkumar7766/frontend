import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/largestBroker.svg' />
                </div>
                <div className='col-6 mt-5'>
                    <h1>Largest stock broker in india</h1>
                    <p>2+ million Zerodha clints contribute to over 15% of all retail order volume in india daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6 pt-4' >
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6 pt-4'>
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Goverenment Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' style={{width:"90%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;