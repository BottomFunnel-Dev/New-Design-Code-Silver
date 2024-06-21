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
                </div><div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
                
                <div className="trackOrderHeading">
                    <img src="/img/Homepage/PetalLeft.png" alt="" />
                    <h2 className="mx-2">Track Your Order</h2>
                    <img src="/img/Homepage/PetalRight.png" alt="" />
                </div>
            
                <div className='container p-0 mt-3 trackOrderContainer'>

                        <div className='col-lg-2 trackOrderLeftContainer'>
                            <img src="/img/Checkout/ring.png" alt="" className='p-2'/>
                            <button>Cancel Order</button>
                        </div>
                        <div className='col-lg-10 trackOrderRightContainer'>
                            <h5 className='TrackorderheadingColor'>#LJ00012300</h5>
                            <div>
                                <p className='TrackOrderSubHeading'>Placed on 24 Mar 2024</p>
                                <div> 
                                    <div>
                                        <img src="/img/TrackOrder/visibility.png" alt="" />
                                        <p>View Order Details</p>
                                    </div>
                                    <div>
                                        <img src="/img/TrackOrder/download.png" alt="" />
                                        <p>Download Invoice</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                </div>

                <div>
                   
                </div>

            </div>
            
        </>
  );
};
