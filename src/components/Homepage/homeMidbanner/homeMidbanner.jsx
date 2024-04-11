import React from "react";
import './homeMidbanner.css';

export const HomeMidBanner = () => {
  return (
    <div className="container-fluid midBannerDiv">
        <img src="/img/cta.png" alt="midBannerImage" className="midBannerImage"/>
        <div className="midBannerContent">
            <h2 className="midBannerHeading">
              When There Is A <br /> Unique Way Of <br /> Expressions.
            </h2>
            <button className="midBannerButton">Shop Now</button>
        </div>
    </div>
  );
};
