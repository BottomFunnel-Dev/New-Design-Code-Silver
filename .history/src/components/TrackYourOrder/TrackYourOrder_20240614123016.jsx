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
            
                <div class="container">
    <div class="order-status">
      <ul>
        <li class="active"><span>Ordered</span></li>
        <li class="active"><span>Confirmed</span></li>
        <li><span>Out for delivery</span></li>
        <li><span>Delivered</span></li>
      </ul>
    </div>
  </div>


            </div>
            
        </>
  );
};
