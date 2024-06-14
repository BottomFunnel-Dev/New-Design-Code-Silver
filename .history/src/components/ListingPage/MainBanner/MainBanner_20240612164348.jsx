import React from "react";
import "./MainBanner.css";

export const MainBanner = () => {
  return (
    <>
      <div className="container-fluid bannerContainer p-0">
        <div className="bannerContent">
          <div className="bannerHeading">
            <p className="m-0">Elevate Your Style with Timeless Elegance</p>
            <h1>Jewellery for Every Occasion</h1>
          </div>
        </div>
        <img
          src="/img/listingPage/Banner1.png.png"
          alt="bannerImage"
          className="bannerImage"
        />
      </div>
    </>
  );
};
