import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import HomePage from './landing_page/home/HomePage';
import ProductsPage from "./landing_page/products/ProductsPage";
import PricingPage from './landing_page/pricing/PricingPage';
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import SuportPage from './landing_page/support/SupportPage'; 
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import PageNotFound from './landing_page/PageNotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/support" element={<SuportPage />} />
              <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
      </BrowserRouter>
  );