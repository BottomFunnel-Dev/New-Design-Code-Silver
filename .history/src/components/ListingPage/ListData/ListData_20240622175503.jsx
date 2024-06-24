import React from 'react';
import './ListData.css';
import { useCart } from '../../context/CartContext';

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
      <div className='descPageHeading px-4'>
        <div>
          <h5> <span className='descPageSubHeading'> Home |</span> View All Jewellery (1258 Designs)</h5>
        </div>
        <div className="filterSortDiv">
          <div className="listFilterButton" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src="/img/listingPage/sort.png" alt="" />
            <p className="m-0">Filter</p>
          </div>

          <div className="modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModal" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content" style={{ backgroundColor: "#FBF5EA" }}>
                <div className="modal-header">
                  <h3 className="modal-title mx-3 mainTextColor" id="exampleModal">Filter</h3>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body mx-3">
                  <form>
                    <div className="filter-section mt-2 ">
                      <h5 className="listDataitemscolor">Jewellery Type</h5>
                      <input type="checkbox" id="gold-jewelry" name="jewelry-type" value="gold-jewelry" />
                      <label htmlFor="gold-jewelry" className="mainTextColor mx-2">Gold Jewellery</label>
                    </div>

                    <div className="filter-section mt-4">
                      <h5 className="listDataitemscolor">Gender</h5>
                      <input type="checkbox" id="female" name="gender" value="female" />
                      <label htmlFor="female" className="mainTextColor mx-2">Female</label><br />
                      <input type="checkbox" id="male" name="gender" value="male" />
                      <label htmlFor="male" className="mainTextColor mx-2">Male</label>
                    </div>

                    <div className="filter-section mt-4">
                      <h5 className="listDataitemscolor">Purity</h5>
                      <input type="checkbox" id="22-karat" name="purity" value="22-karat" />
                      <label htmlFor="22-karat" className="mainTextColor mx-2">22 Karat</label>
                    </div>

                    <div className="filter-section mt-4">
                      <h5 className="listDataitemscolor">Occasion</h5>
                      <input type="checkbox" id="casual-wear" name="occasion" value="casual-wear" />
                      <label htmlFor="casual-wear" className="mainTextColor mx-2">Casual Wear</label><br />
                      <input type="checkbox" id="engagement" name="occasion" value="engagement" />
                      <label htmlFor="engagement" className="mainTextColor mx-2">Engagement</label><br />
                      <input type="checkbox" id="modern-wear" name="occasion" value="modern-wear" />
                      <label htmlFor="modern-wear" className="mainTextColor mx-2">Modern Wear</label><br />
                      <input type="checkbox" id="traditional-wear" name="occasion" value="traditional-wear" />
                      <label htmlFor="traditional-wear" className="mainTextColor mx-2">Traditional Wear</label>
                    </div>

                    <div className="filter-section mt-4">
                      <h5 className="listDataitemscolor">Collection</h5>
                      <input type="checkbox" id="victorian-collection" name="collection" value="victorian-collection" />
                      <label htmlFor="victorian-collection" className="mainTextColor mx-2">Victorian Collection</label><br />
                      <input type="checkbox" id="floral-collection" name="collection" value="floral-collection" />
                      <label htmlFor="floral-collection" className="mainTextColor mx-2">Floral Collection</label><br />
                      <input type="checkbox" id="italian-collection" name="collection" value="italian-collection" />
                      <label htmlFor="italian-collection" className="mainTextColor mx-2">Italian Collection</label><br />
                      <input type="checkbox" id="antique-collection" name="collection" value="antique-collection" />
                      <label htmlFor="antique-collection" className="mainTextColor mx-2">Antique Collection</label>
                    </div>

                    <div className="filter-section mt-4">
                      <h5 className="listDataitemscolor">Type</h5>
                      <input type="checkbox" id="plain-gold" name="type" value="plain-gold" />
                      <label htmlFor="plain-gold" className="mainTextColor mx-2">Plain Gold</label><br />
                      <input type="checkbox" id="rose-gold" name="type" value="rose-gold" />
                      <label htmlFor="rose-gold" className="mainTextColor mx-2">Rose Gold</label>
                    </div>
                  </form>
                </div>
                <div className="mt-1 w-100 p-0">
                  <button type="reset" className="listFilterclearBtn">CLEAR ALL</button>
                  <button type="submit" className="listSortsubmitBtn">Apply</button>
                </div>
              </div>
            </div>
          </div>

          <div className="listFilterButton" data-bs-toggle="modal" data-bs-target="#sortModal">
            <img src="/img/listingPage/filter.png" alt="" />
            <p className="m-0">Sort By</p>
          </div>

          <div className="modal" id="sortModal" tabIndex="-1" aria-labelledby="sortModal" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content" style={{ backgroundColor: "#FBF5EA" }}>
                <div className="modal-header">
                  <h3 className="modal-title mx-3 mainTextColor" id="sortModal">Sort By</h3>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-body mx-3">
                  <div className="filter-section mt-2 ">
                    <h6 className="listDataitemscolor cursor-pointer">Price: High to Low</h6>
                  </div>
                  <div className="filter-section mt-2 ">
                    <h6 className="listDataitemscolor cursor-pointer">Price: Low to High</h6>
                  </div>
                  <div className="filter-section mt-2 ">
                    <h6 className="listDataitemscolor cursor-pointer">Discount: High to Low</h6>
                  </div>
                  <div className="filter-section mt-2 ">
                    <h6 className="listDataitemscolor cursor-pointer">What's New</h6>
                  </div>
                  <div className="filter-section mt-2 ">
                    <h6 className="listDataitemscolor cursor-pointer">Relevance</h6>
                  </div>
                </div>

                <div className="mt-1 w-100 p-0">
                  <button type="reset" className="listFilterclearBtn">CLEAR ALL</button>
                  <button type="submit" className="listSortsubmitBtn">Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                onClick={() => addToWishlist(product)}
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
