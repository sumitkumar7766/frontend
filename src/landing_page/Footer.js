import React from 'react';

function Footer() {
    return (
        <div className='bg-light'>
            <hr />
            <div className='container pt-5'>

                <div className='row'>
                    <div className='col-3'>
                        <img src='media/images/logo.svg' style={{ width: "35%" }}
                            alt="Logo" />
                        <p className='pt-3 mb-3' style={{ fontSize: "12px" }}>© 2010 - 2025, Zerodha Broking Ltd. <br />All rights reserved.</p>
                        <div className='d-flex mb-2 fs-5 text-muted'>
                            <i class="fa-brands fa-x-twitter"></i>
                            <i class="fa-brands fa-facebook ps-3"></i>
                            <i class="fa-brands fa-square-instagram ps-3"></i>
                            <i class="fa-brands fa-linkedin ps-3"></i>
                        </div>
                        <div className='w-50'>
                            <hr />
                        </div>
                        <div className='d-flex fs-5 text-muted'>
                            <i class="fa-brands fa-youtube"></i>
                            <i class="fa-brands fa-whatsapp ps-3"></i>
                            <i class="fa-brands fa-telegram ps-3"></i>
                        </div>
                    </div>
                    <div className='col-3'>
                        <h5 className='mb-3'>Company</h5>
                        <div className='m-0 p-0'>
                            <p className='mt-1 p-0'>About
                            </p>
                            <p className='mt-1 p-0'>Products
                            </p>
                            <p className='mt-1 p-0'>Pricing
                            </p>
                            <p className='mt-1 p-0'>Referral programme
                            </p>
                            <p className='mt-1 p-0'>Careers
                            </p>
                            <p className='mt-1 p-0'>Zerodha.tech
                            </p>
                            <p className='mt-1 p-0'>Open source
                            </p>
                            <p className='mt-1 p-0'>Press & media
                            </p>
                            <p className='mt-1 p-0'>Zerodha Cares (CSR)</p>
                        </div>
                    </div>
                    <div className='col-3'>
                        <h5 className='mb-3'>Support</h5>
                        <div className='m-0 p-0'>
                            <p className='mt-1 p-0'>Contect Us
                            </p>
                            <p className='mt-1 p-0'>Support portal
                            </p>
                            <p className='mt-1 p-0'>Z-Connect blog
                            </p>
                            <p className='mt-1 p-0'>List of charges
                            </p>
                            <p className='mt-1 p-0'>Download and resourecs
                            </p>
                            <p className='mt-1 p-0'>Videos
                            </p>
                            <p className='mt-1 p-0'>Market Overview
                            </p>
                            <p className='mt-1 p-0'>Home to file a complint
                            </p>
                            <p className='mt-1 p-0'>Status of your complaints</p>
                        </div>
                    </div>
                    <div className='col-3'>
                        <h5 className='mb-3'>Account</h5>
                        <div className='m-0 p-0'>
                            <p className='mt-1 p-0'>Open an account
                            </p>
                            <p className='mt-1 p-0'>Fund transfer
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mt-5' style={{fontSize: "11px"}}>
                    <p className='text-muted'>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF

                    </p>
                    <p className='text-muted'>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                    <a className='text-muted text-decoration-none text-primary'>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a><br/><br/>
                    <p className='text-muted'>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                    <p className='text-muted'>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                    <p className='text-muted'>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a>create a ticket here.</a></p>
                </div>
                <div className='d-flex justify-content-evenly ms-5 me-5 text-muted text-opacity-75' style={{fontSize:"12px"}}>
                    <div className=''>
                        <p>NSE</p>
                    </div>
                    <div className=''>
                        <p>BSE</p>
                    </div>
                    <div className=''>
                        <p>MCX</p>
                    </div>
                    <div className=''>
                        <p>Terms & conditions</p>
                    </div>
                    <div className=''>
                        <p>Policies & procedures</p>
                    </div>
                    <div className=''>
                        <p>Privacy policy </p>
                    </div>
                    <div className=''>
                        <p>Disclosure</p>
                    </div>
                    <div className=''>
                        <p>For investor's attention</p>
                    </div>
                    <div className=''>
                        <p>Investor charter</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;