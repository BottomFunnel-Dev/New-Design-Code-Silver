import React from 'react';
import './ListData.css';
import { useCart } from '../../../context/CartContext';

export const ListData = () => {
  const { addToWishlist } = useCart();

  const products = [
    { id: 1, name: 'The Merrie Gold Ring', image: '/img/Homepage/RingTS.png', price: 10912 },
    { id: 2, name: 'The Merrie Gold Bangles', image: '/img/Homepage/BangleTS.png', price: 10912 },
    { id: 3, name: 'The Merrie Gold Earrings', image: '/img/Homepage/EarringTS.png', price: 10912 },
    { id: 4, name: 'The Merrie Gold Earrings', image: '/img/Homepage/Earring2TS.png', price: 10912 },
  ];

  return (
    <div className="container my-5">
      {/* Your existing code */}
      {/* ... */}
      <hr className='custom-hr' />
      <div className="container m-auto row row-cols-lg-4 row-cols-md-2 row-cols-1 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100 rounded-0 listDatasCards">
              <img src={product.image} className="rounded-0 card-img-top sellerposition" alt={product.name} />
              <img
                src="/img/Homepage/WishlistIcon.png"
                alt=""
                className="wishlistIconlistData"
                onClick={() => addToWishlist(product.id)} // Modified to pass product ID
              />
              <div className="card-footer listDataCardContent">
                <h5 className="text-dark">{product.name}</h5>
                <p className="text-muted text-center">Metal: 14k Yellow Gold</p>
                <h5 className="listDataitemscolor">{product.price} <strike className="text-muted">{product.price}</strike></h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
