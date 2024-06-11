import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import './ProductDetail.css';


export const ProductDetail = () => {


  return (
        <div className='container my-5'>
       
        
        <div className="accountHeading">
            <img src="/img/Homepage/PetalLeft.png" alt="" />
            <h2 className="mx-2">Product Details</h2>
            <img src="/img/Homepage/PetalRight.png" alt="" />
        </div>
        
        <div className='container row my-4 accountMainContainer m-auto'>

            <div className='col-lg-7'>

                <Tabs defaultActiveKey="info" id="tabs-example" className="custom-tabs">
                    <Tab eventKey="info" title="Metal Information">
                        <div className='infoContainer'>
                            <p>Metal</p>
                            <p>Yellow Gold</p>
                        </div>
                        <div className='infoContainer'>
                            <p>Metal Purity</p>
                            <p>22KT</p>
                        </div>
                        <div className='infoContainer'>
                            <p>Product Weight</p>
                            <p>2.2g</p>
                        </div>
                        <div className='infoContainer'>
                            <p>Metal Certification</p>
                            <p>mellissaadams@xyz.com</p>
                        </div>
                        
                    </Tab>
                    <Tab eventKey="address" title="Address Book">
                        <div className='infoContainer'>
                            <p>
                                jaipur,Rajasthan
                            </p>
                        </div>
                    </Tab>
                    <Tab eventKey="wishlist" title="Wishlist">
                        <div className="container m-auto row row-cols-lg-2 row-cols-md-2 row-cols-1 g-4">
                            <div className="col">
                                <div className="card h-100 rounded-0 wishlistCardsCards">
                                    <img src="/img/Homepage/RingTS.png" className="rounded-0 card-img-top wishlistCardposition" alt="..."/>
                                    <img src="/img/WishList/Delete.png" alt="" className="wishlistDeleteBtn"/>
                                    <div className="card-footer wishlistCardContent">
                                        <h5 className="text-dark">The Merrie Gold Ring</h5>
                                        <p className="text-muted text-center m-0">Metal: 14k Yellow Gold</p>
                                        <h5 className="wishlistCarditemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 rounded-0 wishlistCardsCards">
                                    <img src="/img/Homepage/BangleTS.png" className="rounded-0 card-img-top wishlistCardposition" alt="..."/>
                                    <img src="/img/WishList/Delete.png" alt="" className="wishlistDeleteBtn"/>
                                    <div className="card-footer wishlistCardContent">
                                        <h5 className="text-dark">The Merrie Gold Bangles</h5>
                                        <p className="text-muted text-center m-0">Metal: 14k Yellow Gold</p>
                                        <h5 className="wishlistCarditemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="order" title="Order History">
                        <div className='infoContainer'>
                            <p>
                                Order History
                            </p>
                        </div>
                    </Tab>
                </Tabs>

            </div>

            <div className='col-lg-5 accountCtaImg'>
                <img src="/img/DescriptionPage/ProductDetails.png" alt="" />
                
            </div>

        </div>


        </div>
  );
};
