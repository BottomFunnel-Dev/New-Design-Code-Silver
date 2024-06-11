import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import './ProductDetail.css';


export const ProductDetail = () => {


  return (
        <div className="mainContainerPD">

            <div className="productDetailHeading">
                <img src="/img/Homepage/PetalLeft.png" alt="" />
                <h2 className="mx-2">Product Details</h2>
                <img src="/img/Homepage/PetalRight.png" alt="" />
            </div>
           
            <div className="container mt-4 m-auto d-flex custom-gap">

                <div className='col-lg-8'>
                    <Tabs defaultActiveKey="info" id="tabs-example" style={{justifyContent:"space-around", backgroundColor:"#E5D7C6", borderBottom:"1px solid #412814 "}}>
                        <Tab eventKey="info" title="Metal Information">
                            <h1>Metal Information</h1>
                          
                        </Tab>
                        <Tab eventKey="ProductInformation" title="Product Information">
                            <h1>Product Information</h1>
                        </Tab>
                        <Tab eventKey="Price" title="Price Breakup">
                            <h1>Price Breakup</h1>
                        </Tab>
                        <Tab eventKey="Service" title="Services">
                            <h1>Services</h1>
                        </Tab>
                        
                    </Tabs>
                </div>

                <div className='col-lg-4 border border-dark'>
                    <img src="/img/DescriptionPage/ProductDetails.png" alt="" className='productDetailImage' />
                </div>
                
            </div>

        </div>
  );
};
