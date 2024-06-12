import React from 'react';
import './CheckoutComponent.css';
import { Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Border } from 'react-bootstrap-icons';

export const CheckoutComponent = () => {
  return (
        <>
            <div className='container my-5'>
                <div className='accountLinkHeading'>
                    <h5> <span className='accountSubHeading'> <a href="/">Home</a></span> | Checkout </h5>
                    <hr className='custom-hr'/>
                </div>
                
            
                <div className='container d-flex p-0'>

                    <div className='col-lg-7 border border-dark' style={{height:"150px"}}>

                        
                    </div>

                    <div className='col-lg-5 checkoutDetails p-3'>
                        <h5 className='text-start '>ORDER SUMMARY</h5>
                        <div className='d-flex justify-content-between'>
                            <p>Sub Total</p>
                            <p>₹10,912</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Discount</p>
                            <p>-₹0</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Delivery Charge</p>
                            <p>FREE</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h6>Total</h6>
                            <h6>₹10,912</h6>
                        </div>
                    </div>

                </div>


            </div>
            
        </>
  );
};
