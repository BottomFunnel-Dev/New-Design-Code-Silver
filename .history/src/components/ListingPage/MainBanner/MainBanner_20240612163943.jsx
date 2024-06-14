import React from "react";
import "./MainBanner.css";

export const MainBanner = () => {
  return (
    <>
      <div className="container-fluid bannerContainer p-0">
        <div className="bannerContent">
          <div className="bannerHeading">
            <p className="m-0">Explore a diverse range of</p>
            <h1>GOLD Jewellery</h1>
          </div>
        </div>
        <img
          src="/img/Homepage/Banner.png"
          alt="bannerImage"
          className="bannerImage"
        />
      </div>
    </>
  );
};
