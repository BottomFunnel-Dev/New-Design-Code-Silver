import React, { useContext, useState } from 'react';
import './WishListCard.css';
import { CartContext } from '../../context/CartContext'; // Update the import path accordingly

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




import React from 'react';
import './WishListCard.css';
import { useCart } from '../../context/CartContext';

export const WishListCard = () => {
  const { addToCart, removeFromCart } = useCart();

  return (
    <div className='container my-5'>
      <div className='wishListHeading'>
        <h5><span className='wishListSubHeading'><a href="/">Home</a></span> | WishList</h5>
        <hr className='custom-hr'/>
      </div>

      <div className="my-4">
        <div className="container m-auto row row-cols-lg-4 row-cols-md-2 row-cols-1 g-4">
          <div className="col">
            <div className="card rounded-0 wishlistCardsCards">
              <img src="/img/Homepage/RingTS.png" className="rounded-0 card-img-top wishlistCardposition" alt="..."/>
              <img src="/img/WishList/Delete.png" alt="" className="wishlistDeleteBtn" onClick={() => removeFromCart(1)}/>
              <div className="card-footer wishlistCardContent">
                <h5 className="text-dark">The Merrie Gold Ring</h5>
                <p className="text-muted text-center m-0">Metal: 14k Yellow Gold</p>
                <h5 className="wishlistCarditemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
              </div>
            </div>
            <div className='WishlistAddCartBtn mt-1' onClick={() => addToCart({ id: 1, name: 'The Merrie Gold Ring', price: 10912 })}>
              Add to Cart
            </div>
          </div>
          <div className="col">
            <div className="card rounded-0 wishlistCardsCards">
              <img src="/img/Homepage/BangleTS.png" className="rounded-0 card-img-top wishlistCardposition" alt="..."/>
              <img src="/img/WishList/Delete.png" alt="" className="wishlistDeleteBtn" onClick={() => removeFromCart(2)}/>
              <div className="card-footer wishlistCardContent">
                <h5 className="text-dark">The Merrie Gold Bangles</h5>
                <p className="text-muted text-center m-0">Metal: 14k Yellow Gold</p>
                <h5 className="wishlistCarditemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
              </div>
            </div>
            <div className='WishlistAddCartBtn mt-1' onClick={() => addToCart({ id: 2, name: 'The Merrie Gold Bangles', price: 10912 })}>
              Add to Cart
            </div>
          </div>
          <div className="col">
            <div className="card rounded-0 wishlistCardsCards">
              <img src="/img/Homepage/EarringTS.png" className="rounded-0 card-img-top wishlistCardposition" alt="..."/>
              <img src="/img/WishList/Delete.png" alt="" className="wishlistDeleteBtn" onClick={() => removeFromCart(3)}/>
              <div className="card-footer wishlistCardContent">
                <h5 className="text-dark">The Merrie Gold Earrings</h5>
                <p className="text-muted text-center m-0">Metal: 14k Yellow Gold</p>
                <h5 className="wishlistCarditemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
              </div>
            </div>
            <div className='WishlistAddCartBtn mt-1' onClick={() => addToCart({ id: 3, name: 'The Merrie Gold Earrings', price: 10912 })}>
              Add to Cart
            </div>
          </div>
          <div className="col">
            <div className="card rounded-0 wishlistCardsCards">
              <img src="/img/Homepage/Earring2TS.png" className="card-img-top rounded-0 wishlistCardposition" alt="..."/>
              <img src="/img/WishList/Delete.png" alt="" className="wishlistDeleteBtn" onClick={() => removeFromCart(4)}/>
              <div className="card-footer wishlistCardContent">
                <h5 className="text-dark">The Merrie Gold Earrings</h5>
                <p className="text-muted text-center m-0">Metal: 14k Yellow Gold</p>
                <h5 className="wishlistCarditemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
              </div>
            </div>
            <div class
