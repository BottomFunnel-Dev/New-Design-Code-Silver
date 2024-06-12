// src/AppRouter.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import DescriptionPage from './pages/DescriptionPage';
import CancellationPolicy from './pages/CancellationPolicy';
import JewelleryMakeovers from './pages/JewelleryMakeovers';
import Privacy from './pages/Privacy';
import ReturnExchange from './pages/ReturnExchangePolicy';
import TermsAndCondition from './pages/TermsAndCondition';
import AboutUs from './pages/About';
import Wishlist from './pages/Wishlist';
import Faq from './pages/FAQ';
import MyAccount from './pages/Account';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/description-page" element={<DescriptionPage/>} />
        <Route path="/cancellation-policy" element={<CancellationPolicy/>} />
        <Route path="/jewellery-makeover" element={<JewelleryMakeovers/>} />
        <Route path="/privacy-policy" element={<Privacy/>} />
        <Route path="/return-exchange-policy" element={<ReturnExchange/>}/>
        <Route path="/terms-and-condition" element={<TermsAndCondition/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/my-account" element={<MyAccount/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="/checkkout" element={<Checkout/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;

