import React from "react";
import './homeMidbanner.css';

export const HomeMidBanner = () => {
  return (
    <>
      <div className="container-fluid midBannerContainer p-0">
        <div className="midBannerContent">
          <div className="midBannerHeading">
            <h2>Gold Jewellery Handcrafted with care Just for you</h2>
            <button className="midBannerButton"><a href=""></a>Explore</button>
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


