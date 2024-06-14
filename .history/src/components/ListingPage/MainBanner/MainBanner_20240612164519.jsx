import React from "react";
import "./MainBanner.css";

export const MainBanner = () => {
  return (
    <>
      <div className="container-fluid mainBannerContainer p-0">
        <div className="mainBannerContent">
          <div className="mainBannerHeading">
            <p className="m-0">Elevate Your Style with Timeless Elegance</p>
            <h1>Jewellery for Every Occasion</h1>
          </div>
        </div>
        <img
          src="/img/listingPage/mainBanner1.png"
          alt="mainBannerImage"
          className="mainBannerImage"
        />
      </div>
    </>
  );
};
