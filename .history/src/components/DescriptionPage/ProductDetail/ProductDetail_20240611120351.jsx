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
                        <div className='infoContainer'>
                            <p>
                                Product Information
                            </p>
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
