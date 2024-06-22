import React from "react";
import './LatestReleases.css';

export const LatestReleases = () => {

    const handleWishlistClick = () => {
        alert("Added to wishlist!");
      };

  return (
        <div className="my-4">
            <div className="LatestReleasesHeading">
                <img src="/img/Homepage/PetalLeft.png" alt="" />
                <h2 className="mx-2">Our latest releases</h2>
                <img src="/img/Homepage/PetalRight.png" alt="" />
            </div>
            <div className="container m-auto row row-cols-lg-4 row-cols-md-2 row-cols-1 g-4">
                <div className="col">
                    <a href="/description-page" className="text-decoration-none">
                    <div className="card h-100 rounded-0 LatestReleasessCards">
                        <img src="/img/Homepage/RingTS.png" className="rounded-0 card-img-top sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconLatestReleases" onClick={handleWishlistClick} />
                        <div className="card-footer LatestReleasesCardContent">
                            <h5 className="text-dark">The Merrie Gold Ring</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h6 className="LatestReleasesitemscolor">10,912 <strike className="text-muted">10,912</strike></h6>
                        </div>
                    </div>
                    </a>
                </div>
                <div className="col">
                <a href="/description-page" className="text-decoration-none">
                    <div className="card h-100 rounded-0 LatestReleasessCards">
                        <img src="/img/Homepage/BangleTS.png" className="rounded-0 card-img-top sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconLatestReleases" onClick={handleWishlistClick} />
                        <div className="card-footer LatestReleasesCardContent">
                            <h5 className="text-dark">The Merrie Gold Bangles</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h6 className="LatestReleasesitemscolor">10,912 <strike className="text-muted">10,912</strike></h6>
                        </div>
                    </div>
                    </a>
                </div>
                <div className="col">
                <a href="/description-page" className="text-decoration-none">
                    <div className="card h-100 rounded-0 LatestReleasessCards">
                        <img src="/img/Homepage/EarringTS.png" className="rounded-0 card-img-top sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconLatestReleases" onClick={handleWishlistClick} />
                        <div className="card-footer LatestReleasesCardContent">
                            <h5 className="text-dark">The Merrie Gold Earrings</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h6 className="LatestReleasesitemscolor">10,912 <strike className="text-muted">10,912</strike></h6>
                        </div>
                    </div>
                    </a>
                </div>
                <div className="col">
                <a href="/description-page" className="text-decoration-none">
                    <div className="card h-100 rounded-0 LatestReleasessCards">
                        <img src="/img/Homepage/Earring2TS.png" className="card-img-top rounded-0 sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconLatestReleases"/>
                        <div className="card-footer LatestReleasesCardContent">
                            <h5 className="text-dark">The Merrie Gold Earrings</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h6 className="LatestReleasesitemscolor">10,912 <strike className="text-muted">10,912</strike></h6>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
        </div>
  );
};
