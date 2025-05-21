import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homehero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online Plateform to invest in stocks, derivatives, mutual funds, and more</p>
                <button className='btn btn-primary p-2 fs-4 mb-5' style={{width: "22%", margin: "0 auto"}}>Signup now</button>
            </div>
        </div>
     );
}

export default Hero;