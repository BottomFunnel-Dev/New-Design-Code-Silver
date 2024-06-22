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
            <div className='WishlistAddCartBtn mt-1' onClick={() => addToCart({ id: 4, name: 'The Merrie Gold Earrings', price: 10912 })}>
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
