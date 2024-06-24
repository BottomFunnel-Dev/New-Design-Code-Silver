import React from 'react';
import './ListData.css';
import { useWishlist } from './WishlistContext';

const items = [
  {
    id: 1,
    name: 'The Merrie Gold Ring',
    img: '/img/Homepage/RingTS.png',
    price: '10,912',
    metal: '14k Yellow Gold'
  },
  {
    id: 2,
    name: 'The Merrie Gold Bangles',
    img: '/img/Homepage/BangleTS.png',
    price: '10,912',
    metal: '14k Yellow Gold'
  },
  {
    id: 3,
    name: 'The Merrie Gold Earrings',
    img: '/img/Homepage/EarringTS.png',
    price: '10,912',
    metal: '14k Yellow Gold'
  },
  {
    id: 4,
    name: 'The Merrie Gold Earrings',
    img: '/img/Homepage/Earring2TS.png',
    price: '10,912',
    metal: '14k Yellow Gold'
  },
  // Add more items as needed
];

export const ListData = () => {
  const { addToWishlist } = useWishlist();

  const handleAddToWishlist = (item) => {
    addToWishlist(item);
  };

  return (
    <div className="container my-5">
      <div className='descPageHeading px-4'>
        <div>
          <h5> <span className='descPageSubHeading'> Home |</span> View All Jewellery (1258 Designs)</h5>
        </div>
        <div className="filterSortDiv">
          {/* Filter and Sort Buttons */}
        </div>
      </div>
      <hr className='custom-hr'/>
      <div className="container m-auto row row-cols-lg-4 row-cols-md-2 row-cols-1 g-4">
        {items.map((item) => (
          <div className="col" key={item.id}>
            <div className="card h-100 rounded-0 listDatasCards">
              <img src={item.img} className="rounded-0 card-img-top sellerposition" alt={item.name}/>
              <img
                src="/img/Homepage/WishlistIcon.png"
                alt=""
                className="wishlistIconlistData"
                onClick={() => handleAddToWishlist(item)}
              />
              <div className="card-footer listDataCardContent">
                <h5 className="text-dark">{item.name}</h5>
                <p className="text-muted text-center">Metal: {item.metal}</p>
                <h5 className="listDataitemscolor">{item.price} <strike className="text-muted">{item.price}</strike></h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
