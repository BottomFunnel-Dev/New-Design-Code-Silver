import React from "react";
import "./TrendingCollection.css";
import { Link } from 'react-router-dom';

export const TrendingCollection = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="trendingCollectionsHeading">
          <img src="/img/Homepage/PetalLeft.png" alt="" />
          <h2 className="mx-2">Trending Collections</h2>
          <img src="/img/Homepage/PetalRight.png" alt="" />
        </div>
        <div className="container trendingCollectionContainer">
          <div className="trendingCollectionLeft">
          {/* <Link to="/descriptionpage"> */}
              <img src="/img/Homepage/Italian.png" alt="" />
              {/* </Link> */}
              {/* <h2 className="text-white overlay-text2">Italian Collection</h2> */}
              <img src="/img/Homepage/Floral.png" alt="" className="floralImage" />
              {/* <h2 className="text-white overlay-text heading">Floral Collection</h2> */}
          </div>
          <div className="trendingCollectionRight">
              <img src="/img/Homepage/Antique.png" alt="" />
              {/* <h2 className="text-white overlay-text1">Antique Collection</h2> */}
              <img src="/img/Homepage/Victorian.png" alt="" />
              {/* <h2 className="text-white overlay-text">Victorian Collection</h2> */}
          </div>
        </div>
      </div>
    </>
  );
};
