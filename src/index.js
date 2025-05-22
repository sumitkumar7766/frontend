import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import ProductsPage from "./landing_page/products/ProductsPage";
import PricingPage from './landing_page/pricing/PricingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <PricingPage />

  </React.StrictMode>
);