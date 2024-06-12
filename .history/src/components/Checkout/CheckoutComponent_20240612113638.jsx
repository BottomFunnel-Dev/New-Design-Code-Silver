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
                        <h5 className='text-start checkoutheadingColor'>ORDER SUMMARY</h5>
                        <div className='d-flex justify-content-between'>
                            <p className='checkoutSubHeading'>Sub Total</p>
                            <p className='checkoutFontColor'>₹10,912</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='checkoutSubHeading'>Discount</p>
                            <p className='checkoutFontColor'>-₹0</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='checkoutSubHeading'>Delivery Charge</p>
                            <p className='checkoutSubHeading'>FREE</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h6 className='checkoutFontColor'>Total</h6>
                            <h6 className='checkoutFontColor'>₹10,912</h6>
                        </div>
                    </div>

                </div>


            </div>
            
        </>
  );
};
