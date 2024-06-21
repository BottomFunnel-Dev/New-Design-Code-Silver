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
