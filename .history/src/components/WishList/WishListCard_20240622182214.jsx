import React from 'react';
import { useCart } from '../../context/CartContext';

export const WishListCard = () => {
  const { wishListItems } = useCart();

  return (
    <div className='container my-5'>
      <div className='wishListHeading'>
        <h5>
          <span className='wishListSubHeading'>
            <a href="/">Home</a>
          </span>
          | WishList
        </h5>
        <hr className='custom-hr' />
      </div>
      <div className="my-4">
        <div className="container m-auto row row-cols-lg-4 row-cols-md-2 row-cols-1 g-4">
          {wishListItems.map((item) => (
            <div className="col" key={item.id}>
              <div className="card rounded-0 wishlistCardsCards">
                <img src={item.image} className="rounded-0 card-img-top wishlistCardposition" alt={item.name} />
                <img
                  src="/img/WishList/Delete.png"
                  alt="Delete"
                  className="wishlistDeleteBtn"
                  onClick={() => removeFromWishlist(item.id)}
                />
                <div className="card-footer wishlistCardContent">
                  <h5 className="text-dark">{item.name}</h5>
                  <p className="text-muted text-center m-0">Metal: 14k Yellow Gold</p>
                  <h5 className="wishlistCarditemscolor">{item.price} <strike className="text-muted">{item.price}</strike></h5>
                </div>
              </div>
              <div className='WishlistAddCartBtn mt-1' onClick={() => addToCart(item)}>
                Add to Cart
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
