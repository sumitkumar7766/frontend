import React from 'react';

function Universe() {
    return (
        <div className='container p-5'>
            <div className='row'>
                <div>
                    <h5 className='text-center'>Want to know more about our technology stack? Check out the <a href='' className='text-decoration-none'>Zerodha.tech</a> blog.</h5>
                    <h2 className='text-center pt-5 mt-5'>The Zerodha Universe</h2>
                    <p className='text-center pt-2'>Extend your trading and investment experience even further with our partner platforms</p>
                    <div className='row ps-5 pe-5 pt-5'>
                        <div className='col-4 ps-5 pe-5 pt-5'>
                            <img src='media/images/zerodhaFundhouse.png' style={{ width: "200px" }} className='ms-5' />
                            <p className='text-center mt-3 opacity-50' style={{ fontSize: "14px" }}>Our asset management venture
                                that is creating simple and transparent index
                                funds to help you save for your goals.
                            </p>
                        </div>
                        <div className='col-4 ps-5 pe-5 pt-5'>
                            <img src='media/images/sensibullLogo.svg' style={{ width: "200px" }} className='ms-5' />
                            <p className='text-center mt-4 opacity-50' style={{ fontSize: "13px" }}>Options trading platform that lets you
                                create strategies, analyze positions, and examine
                                data points like open interest, FII/DII, and more.
                            </p>
                        </div>
                        <div className='col-4 ps-5 pe-5 pt-5'>
                            <img src='media/images/tijori.svg' style={{ width: "180px" }} className='ms-5' />
                            <p className='text-center opacity-50' style={{ fontSize: "13px" }}>
                                Investment research platform
                                that offers detailed insights on stocks,
                                sectors, supply chains, and more.
                            </p>
                        </div>
                    </div>

                    <div className='row ps-5 pe-5'>
                        <div className='col-4  p-5'>
                            <img src='media/images/streakLogo.png' style={{ width: "200px" }} className='ms-5' />
                            <p className='text-center mt-3 opacity-50' style={{ fontSize: "14px" }}>
                                Systematic trading platform
                                that allows you to create and backtest
                                strategies without coding.
                            </p>
                        </div>
                        <div className='col-4  p-5'>
                            <img src='media/images/smallcaseLogo.png' style={{ width: "200px" }} className='ms-5' />
                            <p className='text-center mt-3 opacity-50' style={{ fontSize: "14px" }}>
                                Thematic investing platform
                                that helps you invest in diversified
                                baskets of stocks on ETFs.
                            </p>
                        </div>
                        <div className='col-4  p-5'>
                            <img src='media/images/dittoLogo.png' style={{ width: "150px" }} className='ms-5 ps-2' />
                            <p className='text-center mt-3 opacity-50' style={{ fontSize: "14px" }}>
                                Personalized advice on life
                                and health insurance. No spam
                                and no mis-selling.
                            </p>
                        </div>
                        <button className='btn btn-primary p-2 fs-4 mt-3' style={{width: "22%", margin: "0 auto"}}>Signup for free</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Universe;