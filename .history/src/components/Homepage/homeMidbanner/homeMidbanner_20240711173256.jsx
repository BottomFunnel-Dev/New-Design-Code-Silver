import React from "react";
import './homeMidbanner.css';

export const HomeMidBanner = () => {
  return (
    <>
      <div className="container-fluid midBannerContainer p-0">
        <div className="midBannerContent">
          <div className="midBannerHeading">
            <h2>Discover unique pieces that make you stand out from the crowd.</h2>
            <a href="/product-list">
              <button className="midBannerButton">Explore</button>
            </a>
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


