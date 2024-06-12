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
                        <div className='d-flex justify-content-between mt-4'>
                            <p className='checkoutSubHeading m-0'>Sub Total</p>
                            <p className='checkoutFontColor m-0'>₹10,912</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='checkoutSubHeading m-0'>Discount</p>
                            <p className='checkoutFontColor m-0'>-₹0</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='checkoutSubHeading'>Delivery Charge</p>
                            <p className='checkoutSubHeading'>FREE</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h5 className='checkoutFontColor'>Total</h5>
                            <h5 className='checkoutFontColor'>₹10,912</h5>
                        </div>

                        <div className='checkoutPromoCode'>

                        </div>
                    </div>

                </div>


            </div>
            
        </>
  );
};
