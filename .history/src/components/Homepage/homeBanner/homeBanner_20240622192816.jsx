import React from "react";
import "./homeBanner.css";

export const HomeBanner = () => {
  return (
    <>
      <div className="container-fluid bannerContainer p-0">
        <div className="bannerContent">
          <div className="bannerHeading">
            <p className="m-0">Explore a diverse range of</p>
            <h1>GOLD Jewellery</h1>
            <button className="bannerButton"><a href="/product-list"></a>Explore</button>
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
