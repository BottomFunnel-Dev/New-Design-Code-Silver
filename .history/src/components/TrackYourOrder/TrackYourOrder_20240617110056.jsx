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
            
                <div className='container p-0 mt-3'>

                        <div className='col-lg-4 border border-dark'>
                            <img src="/img/Checkout/ring.png" alt="" className='p-2'/>
                        </div>
                        <div className='col-lg-8 px-3'>

                        </div>

                </div>

                <div>
                   
                </div>

            </div>
            
        </>
  );
};
