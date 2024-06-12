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
                
            
                <div className='container d-flex p-0 mt-3'>

                    <div className='col-lg-7 border border-dark d-flex text-start' style={{height:"250px"}}>
                        <div className='col-lg-4 border border-dark'>
                            <img src="/img/Checkout/ring.png" alt="" className='w-100 h-100 p-2'/>
                        </div>
                        <div className='col-lg-8 border border-dark'>
                            <div className='d-flex justify-content-between py-2'>
                                <h5 className='checkoutheadingColor m-0'>The Merrie Gold Ring</h5>
                                <div className='mx-2'>
                                    <img src="/img/Checkout/favorite.png" alt="" className='checkoutIconSizes'/>
                                    <img src="/img/Checkout/delete.png" alt="" className='checkoutIconSizes mx-2'/>
                                </div>
                            </div>
                            <p className='checkoutSubHeading'>Weight - 2.158g  |  Size - 19.10 MM</p>
                            <select id="ring-size" name="ring-size" className='checkoutSelectSize p-1'>
                                <option value="4">Size</option>
                                <option value="4.5">Size 4.5</option>
                                <option value="5">Size 5</option>
                                <option value="5.5">Size 5.5</option>
                                <option value="6">Size 6</option>
                            </select>
                        </div>
                    </div>

                    <div className='col-lg-5 checkoutDetails p-4'>
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

                        <div className='checkoutPromoCodeBox mt-3'>
                            <input type="text" placeholder='Enter Your Code here'/>
                            <button>APPLY</button>
                        </div>
                        <p className='checkoutFontColor'>View promo code</p>
                        <button className='w-100 checkoutBuyButton mt-4'>BUY NOW</button>
                    </div>

                </div>


            </div>
            
        </>
  );
};
