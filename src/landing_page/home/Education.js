import React from 'react';

function Education() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <img src='media/images/education.svg' />
                </div>
                <div className='col p-5'>
                    <h2 className='mb-4 pt-5'>Free and open market education</h2>
                    <p className='mb-3 text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="#" className="mb-3 text-decoration-none">Varsity <i class="fa-solid fa-arrow-right mb-3"></i></a>
                    <p className='mb-3 text-muted'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="#" className="text-decoration-none">TradingQ&A  <i class="fa-solid fa-arrow-right ms-1"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;