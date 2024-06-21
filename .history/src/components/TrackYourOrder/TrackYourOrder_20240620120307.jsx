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
                        <div className='col-lg-10 trackOrderRightContainer p-2'>
                            <h5 className='TrackorderheadingColor'>#LJ00012300</h5>
                            <div className='TrackOrderOptionsDiv'>
                                <p className='TrackOrderSubHeading m-0'>Placed on 24 Mar 2024</p>
                                <div className='trackOrderOptions'> 
                                    <div>
                                        <img src="/img/TrackOrder/visibility.png" alt="" />
                                        <p className='m-0'>View Order Details</p>
                                    </div>
                                    <div>
                                        <img src="/img/TrackOrder/download.png" alt="" />
                                        <p className='m-0'>Download Invoice</p>
                                    </div>
                                </div>
                            </div>

                            <div className='border border-dark'>
                                <div className='trackOrderdataBox'>
                                    <h4 className='TrackorderheadingColor mt-2'>The Merrie Gold Ring</h4>
                                    <p className='ringweightText m-0'>Weight - 2.158g  |  Size - 19.10 MM</p>
                                    <h4 className='trackringprice mt-2'>₹10,912</h4>
                                    <div className='trackingDate px-2'>
                                        <p>Expected Delivery on <strong>Monday 30 Mar 2023 </strong> </p>
                                    </div> 
                                </div>

                                <div className='border boder-dark'>

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
