import React from 'react';

function LeftSelection({
    imageURL,
    productName,
    productDesription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
    arrowlink1,
    arrowlink2,
}) {
    return (
        <div className='container'>
            <div className='row p-5'>
                <div className='col-7 p-5'>
                    <img src={imageURL} />
                </div>
                <div className='col-5 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    <div>
                            <a href="#" className='text-decoration-none'>{tryDemo} {arrowlink1}</a>
                            <a href="#" className='text-decoration-none' style={{marginLeft:"90px"}}>{learnMore} {arrowlink2}</a>
                    </div>
                    <div className="mt-3">
                        <a href={googlePlay}>
                            <img src="media/images/googlePlayBadge.svg" />
                        </a>
                        <a href={appStore}>
                            <img
                                src="media/images/appstoreBadge.svg"
                                style={{ marginLeft: "50px" }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSelection;