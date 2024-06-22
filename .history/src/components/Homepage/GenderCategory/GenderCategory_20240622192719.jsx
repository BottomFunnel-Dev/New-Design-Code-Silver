import React from "react";
import "./GenderCategory.css";

export const GenderCategory = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="genderCategoryHeading">
          <img src="/img/Homepage/PetalLeft.png" alt="" />
          <h2 className="mx-2">Shop By Gender</h2>
          <img src="/img/Homepage/PetalRight.png" alt="" />
        </div>
        <div className="container genderCategoryContainer">
          <div className="categoryHim">
            <img src="/img/Homepage/ForMen.png" alt="" />
            <h2 className="text-white overlay-text"><a href="/product"></a>For Him</h2>
          </div>
          <div className="categoryHer">
            <img src="/img/Homepage/ForHer.png" alt="" />
            <h2 className="text-white overlay-text">For Her</h2>
          </div>
        </div>
      </div>
    </>
  );
};
