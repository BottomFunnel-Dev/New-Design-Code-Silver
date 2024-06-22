import React from "react";
import './AlsoLike.css';

export const AlsoLike = () => {

    const handleWishlistClick = () => {
        alert("Added to wishlist!");
      };

      
  return (
        <div className="mainContainerAS">
            <div className="alsoLikeHeading">
                <img src="/img/Homepage/PetalLeft.png" alt="" />
                <h2 className="mx-2">You May Also Like</h2>
                <img src="/img/Homepage/PetalRight.png" alt="" />
            </div>
            <div className="container m-auto row row-cols-lg-4 row-cols-md-2 row-cols-1 g-4">
                <div className="col">
                    <div className="card h-100 rounded-0 alsoLikesCards">
                        <img src="/img/Homepage/RingTS.png" className="rounded-0 card-img-top sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconalsoLike" onClick={handleWishlistClick}/>
                        <div className="card-footer alsoLikeCardContent">
                            <h5 className="text-dark">The Merrie Gold Designer Ring</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h5 className="alsoLikeitemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded-0 alsoLikesCards">
                        <img src="/img/Homepage/BangleTS.png" className="rounded-0 card-img-top sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconalsoLike" onClick={handleWishlistClick}/>
                        <div className="card-footer alsoLikeCardContent">
                            <h5 className="text-dark">The Merrie Gold Bangles</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h5 className="alsoLikeitemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded-0 alsoLikesCards">
                        <img src="/img/Homepage/EarringTS.png" className="rounded-0 card-img-top sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconalsoLike" onClick={handleWishlistClick}/>
                        <div className="card-footer alsoLikeCardContent">
                            <h5 className="text-dark">The Merrie Gold Earrings</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h5 className="alsoLikeitemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded-0 alsoLikesCards">
                        <img src="/img/Homepage/Earring2TS.png" className="card-img-top rounded-0 sellerposition" alt="..."/>
                        <img src="/img/Homepage/WishlistIcon.png" alt="" className="wishlistIconalsoLike" onClick={handleWishlistClick}/>
                        <div className="card-footer alsoLikeCardContent">
                            <h5 className="text-dark">The Merrie Gold Earrings</h5>
                            <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                            <h5 className="alsoLikeitemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};
