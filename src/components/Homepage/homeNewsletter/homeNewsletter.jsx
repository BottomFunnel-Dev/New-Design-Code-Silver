import React from "react";
import './homeNewsletter.css';

export const HomeNewsLetter = () => {
  return (
    <div className="container-fluid newsletterDiv">
      <img src="/img/Join us.png" alt="newsletterImage" className="newsletterImage"/>
      <div className="newsletterContent">
        <p className="newsletterHeading">
          JOIN US! </p>
        <p className="newsletterHeading2">
         For Latest Updates & Offers
        </p>
          <div className="col-xl-12">
            <input type="text" placeholder="Enter your email address" className="homeNewsletterInput col-xl-8"/>
            <button className="newsletterButton col-xl-4">Subscribe</button>
          </div>
        
      </div>
    </div>
  );
};
