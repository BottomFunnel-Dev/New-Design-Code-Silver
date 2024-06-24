import React, { useContext } from "react";
import './TopSellers.css';
import { WishlistContext } from '../../../context/WishlistContext';

export const TopSellers = () => {
  const { addToWishlist } = useContext(WishlistContext);

  const handleWishlistClick = (item) => {
    addToWishlist(item);
    console.log("")
    alert("Added to wishlist!");
  };

  const topSellersItems = [
    {
      id: 1,
      imgSrc: "/img/Homepage/RingTS.png",
      title: "The Merrie Gold Ring",
      metal: "14k Yellow Gold",
      price: 10912,
      originalPrice: 10912
    },
    {
      id: 2,
      imgSrc: "/img/Homepage/BangleTS.png",
      title: "The Merrie Gold Bangles",
      metal: "14k Yellow Gold",
      price: 10912,
      originalPrice: 10912
    },
    {
      id: 3,
      imgSrc: "/img/Homepage/EarringTS.png",
      title: "The Merrie Gold Earrings",
      metal: "14k Yellow Gold",
      price: 10912,
      originalPrice: 10912
    },
    {
      id: 4,
      imgSrc: "/img/Homepage/Earring2TS.png",
      title: "The Merrie Gold Earrings",
      metal: "14k Yellow Gold",
      price: 10912,
      originalPrice: 10912
    }
  ];

  return (
    <div className="my-4">
      <div className="topSellerHeading">
        <img src="/img/Homepage/PetalLeft.png" alt="" />
        <h2 className="mx-2">Top Sellers</h2>
        <img src="/img/Homepage/PetalRight.png" alt="" />
      </div>
      <div className="container m-auto row row-cols-lg-4 row-cols-md-2 row-cols-1 g-4">
        {topSellersItems.map((item) => (
          <div className="col" key={item.id}>
            <div className="card h-100 rounded-0 topSellersCards">
              <img src={item.imgSrc} className="rounded-0 card-img-top sellerposition" alt={item.title} />
              <img 
                src="/img/Homepage/WishlistIcon.png" 
                alt="" 
                className="wishlistIconTopSeller" 
                onClick={() => handleWishlistClick(item)} 
              />
              <div className="card-footer topSellerCardContent">
                <h5 className="text-dark">{item.title}</h5>
                <p className="text-muted text-center">Metal: {item.metal}</p>
                <h5 className="topSelleritemscolor">{item.price} <strike className="text-muted">{item.originalPrice}</strike></h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
