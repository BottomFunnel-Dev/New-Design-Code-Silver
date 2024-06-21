import React from 'react';
import './TrackYourOrder.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const TrackYourOrder = () => {
  return (
        <>
            <div className='container my-5'>
                <div className='accountLinkHeading'>
                    <h5> <span className='accountSubHeading'> <a href="/">Home</a></span> | Order </h5>
                    <hr className='custom-hr'/>
                </div>
                
                <div className="trackOrderHeading">
                    <img src="/img/Homepage/PetalLeft.png" alt="" />
                    <h2 className="mx-2">Track Your Order</h2>
                    <img src="/img/Homepage/PetalRight.png" alt="" />
                </div>
            
                <div className='container p-0 mt-3 checkoutMainBox'>

                        <div className='col-lg-4 '>
                            <img src="/img/Checkout/ring.png" alt="" className='w-100 p-2'/>
                        </div>
                        <div className='col-lg-8 px-3'>
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
                            <h3 className='checkoutheadingColor mt-3'>₹10,912</h3>
                            <p className='checkoutSubHeading m-0'> <strong>14 Days</strong> Return Available</p>
                            <p className='checkoutSubHeading'> <img src="/img/Checkout/check_circle.png" alt="" className='checkoutCheckIcon'/> Delivery between <strong>18 April - 20 April</strong></p>
                        </div>

                

                </div>

                <div>
                <ol id="progress-bar">
                    <li class="step-done">Step 1</li>
                    <li class="step-active">Step 2</li>
                    <li class="step-todo">Step 3</li>
                    <li class="step-todo">Step 4</li>
                    <li class="step-todo">Step 5</li>
                </ol>
                </div>

            </div>
            
        </>
  );
};
