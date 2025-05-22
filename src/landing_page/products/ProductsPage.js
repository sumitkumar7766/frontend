import React from "react";
import Hero from "./Hero";
import LeftSelection from "./LeftSection";
import RightSection from "./RightSection";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Universe from "./Universe";

function ProductsPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <LeftSelection
                imageURL="media/images/kite.png"
                productName="Kite"
                productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo="Try demo"
                learnMore="Learn more"
                arrowlink1={<i class='fa-solid fa-arrow-right ms-3'></i>}
                arrowlink2={<i class='fa-solid fa-arrow-right ms-3'></i>}
            />
            <RightSection 
                imageURL="media/images/console.png" 
                productName="Console" 
                productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." tryDemo="leran more" 
                arrowlink1={<i class='fa-solid fa-arrow-right ms-3'></i>} 
            />
            <LeftSelection 
                imageURL="media/images/coin.png" 
                productName="Coin" 
                productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
                tryDemo="Coin" 
                arrowlink1={<i class='fa-solid fa-arrow-right ms-3'></i>} 
            />
            <RightSection 
                imageURL="media/images/kiteconnect.png" 
                productName="Kite Connect API" 
                productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." 
                tryDemo="Kite Connect" 
                arrowlink1={<i class='fa-solid fa-arrow-right ms-3'></i>} 
            />
            <LeftSelection 
                imageURL="media/images/varsity.png" 
                productName="Varsity mobile" 
                productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." />
            <Universe />
            <Footer />
        </>
    )
}

export default ProductsPage