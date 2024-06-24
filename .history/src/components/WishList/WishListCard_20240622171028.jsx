import React, { useContext, useState } from 'react';
import './WishListCard.css';

export const WishListCard = () => {
  const { addToCart } = useContext(CartContext);

  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      imgSrc: "/img/Homepage/RingTS.png",
      title: "The Merrie Gold Ring",
      metal: "14k Yellow Gold",
      price: 10912,
      originalPrice: 10912
    },
    // ... other items
  ]);

  const handleDelete = (id) => {
    const updatedItems = wishlistItems.filter(item => item.id !== id);
    setWishlistItems(updatedItems);
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    handleDelete(item.id);
  };

  return (
    <div className='container my-5'>
      <div className='wishListHeading'>
        <h5>
          <span className='wishListSubHeading'>
            <a href="/">Home</a>
          </span> | WishList
        </h5>
        <hr className='custom-hr' />
      </div>
      <div className="my-4">
        <div className="container m-auto row row-cols-lg-4 row-cols-md-2 row-cols-1 g-4">
          {wishlistItems.map((item) => (
            <div className="col" key={item.id}>
              <div className="card rounded-0 wishlistCardsCards">
                <img src={item.imgSrc} className="rounded-0 card-img-top wishlistCardposition" alt={item.title} />
                <img 
                  src="/img/WishList/Delete.png" 
                  alt="Delete" 
                  className="wishlistDeleteBtn" 
                  onClick={() => handleDelete(item.id)} 
                />
                <div className="card-footer wishlistCardContent">
                  <h5 className="text-dark">{item.title}</h5>
                  <p className="text-muted text-center m-0">Metal: {item.metal}</p>
                  <h5 className="wishlistCarditemscolor">
                    {item.price} <strike className="text-muted">{item.originalPrice}</strike>
                  </h5>
                </div>
              </div>
              <div 
                className='WishlistAddCartBtn mt-1'
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
