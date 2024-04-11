import React from "react";
import './homeBanner.css';

export const HomeBanner = () => {
  return (
    <>
        <div className="container-fluid bannerDiv">
        <img src="/img/Homepage/Banner.png" alt="bannerImage" className="bannerImage"/>
        <div className="bannerContent">
            <h2 className="bannerHeading">Embrace The Elegance</h2>
            <button className="bannerButton">Shop Now</button>
        </div>
        </div>
 
    </>

  );
};