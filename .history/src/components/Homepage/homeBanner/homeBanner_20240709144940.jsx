import React from "react";
import "./homeBanner.css";

export const HomeBanner = () => {
  return (
    <>
      <div className="container-fluid bannerContainer p-0">
        <div className="bannerContent">
          <div className="bannerHeading">
            <p className="m-0">Timeless elegance for every occasion.</p>
            <h1>GOLD Jewellery</h1>
            <button className="bannerButton"><a href="/product-list" className="text-decoration-none">Explore</a></button>
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