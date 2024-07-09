import React from "react";
import './homeMidbanner.css';

export const HomeMidBanner = () => {
  return (
    <>
      <div className="container-fluid midBannerContainer p-0">
        <div className="midBannerContent">
          <div className="midBannerHeading">
            <h2>Jewellery that shines as bright as you do.</h2>
            <button className="midBannerButton">Explore</a></button>
          </div>
        </div>
        <img
          src="/img/Homepage/CTA.png"
          alt="midBannerImage"
          className="midBannerImage"
        />
      </div>
    </>
  );
};


