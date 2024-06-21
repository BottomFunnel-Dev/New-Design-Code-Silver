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
    <div class="order-card">
      <img src="https://via.placeholder.com/150" alt="Product Image">
      <div class="order-details">
        <p>#LJ00012300</p>
        <p>Placed on 24 Mar 2024</p>
        <h5>The Merrie Gold Ring</h5>
        <p>Weight - 2.158g | Size - 19.10 MM</p>
        <p class="price">₹10,912</p>
        <div class="expected-delivery">Expected Delivery on Monday 30 Mar 2023</div>
      </div>
      <div class="order-status">
        <ul>
          <li class="active">Ordered</li>
          <li class="active">Confirmed</li>
          <li>Out for Delivery</li>
          <li>Delivered</li>
        </ul>
      </div>
      <div class="order-actions">
        <button>Cancel Order</button>
      </div>
      <div class="order-links">
        <a href="#"><i class="fas fa-eye"></i> View Order Details</a>
        <a href="#"><i class="fas fa-download"></i> Download Invoice</a>
      </div>
    </div>
  </div>


            </div>
            
        </>
  );
};
