import React from "react";

function Pricing() {
    return (
        <div className="container mb-5">
            <div className="row p-5">
                <div className="col-5 p-5">
                    <h1 className="mb-4">Unbeatable pricing</h1>
                    <p className="mb-3">
                        We pioneered the concept of discount broking and price transparency
                        in India. Flat fees and no hidden charges.
                    </p>
                    <a href="#" className="text-decoration-none mt-2">
                        See pricing <i class="fa-solid fa-arrow-right ms-1"></i>
                    </a>
                </div>
                <div className="col-7 p-5">
                    <div className="row mt-5">
                        <div className="col-4 d-flex align-items-end">
                            <img src="media/images/pricing0.svg" style={{width:"100px"}}/>
                            <p className="text-muted" style={{fontSize:"10px"}}>Free account opening</p>
                        </div>
                        <div className="col-5 d-flex align-items-end">
                            <img src="media/images/pricing0.svg" style={{width:"100px"}}/>
                            <p className="text-muted" style={{fontSize:"10px"}}>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col-3 d-flex align-items-end">
                            <img src="media/images/20rupes.svg" style={{width:"100px"}}/>
                            <p className="text-muted" style={{fontSize:"10px"}}>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
