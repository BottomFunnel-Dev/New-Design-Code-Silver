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
                            <p>Done</p>
                        </div>
                        
                    </Tab>
                    <Tab eventKey="address" title="Product Information">
                        <div className='infoContainer d-flex flex-column text-start'>
                            <p>
                                Embrace timeless sophistication with our Classic Elegance Gold Ring. Crafted from the finest 22k
                                gold, this exquisite piece is designed to add a touch of refinement to any jewelry collection. Its sleek,
                                polished band embodies a perfect blend of simplicity and elegance, making it a versatile accessory
                                "for every occasion.
                            </p>
                            <h6>Features:</h6>
                            <ul>
                                <li>Material: 14k gold</li>
                                <li>Band Width: 2mm</li>
                                <li>Available Sizes: 5-9</li>
                                <li>Weight: 3 grams</li>
                            </ul>
                        </div>
                    </Tab>
                    <Tab eventKey="wishlist" title="Price Breakup">
                    <div className='infoContainer'>
                            <p>
                                Price Breakup
                            </p>
                        </div>
                    </Tab>
                    <Tab eventKey="order" title="Services">
                        <div className='infoContainer'>
                            <p>
                                Our Services
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
