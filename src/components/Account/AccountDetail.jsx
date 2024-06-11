import React from 'react';
import './AccountDetail.css';
import { Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AccountDetail = () => {
  return (
        <>
            <div className='container my-5'>
                <div className='accountLinkHeading'>
                    <h5> <span className='accountSubHeading'> <a href="/">Home</a></span> | My Account </h5>
                    <hr className='custom-hr'/>
                </div>
                
                <div className="accountHeading">
                    <img src="/img/Homepage/PetalLeft.png" alt="" />
                    <h2 className="mx-2">My Account</h2>
                    <img src="/img/Homepage/PetalRight.png" alt="" />
                </div>
                 
                <div className='container row my-4 accountMainContainer m-auto'>

                    <div className='col-lg-7'>

                        <Tabs defaultActiveKey="info" id="tabs-example" className="custom-tabs">
                            <Tab eventKey="info" title="Personal Information">
                                <div className='infoContainer'>
                                    <p>Title</p>
                                    <p>Ms</p>
                                </div>
                                <div className='infoContainer'>
                                    <p>Name</p>
                                    <p>Mellissa Adams</p>
                                </div>
                                <div className='infoContainer'>
                                    <p>Phone Number</p>
                                    <p>+91 7894561230</p>
                                </div>
                                <div className='infoContainer'>
                                    <p>Email</p>
                                    <p>mellissaadams@xyz.com</p>
                                </div>
                                
                            </Tab>
                            <Tab eventKey="address" title="Address Book">
                                <div className='infoContainer'>
                                    <p>
                                        jaipur,Rajasthan
                                    </p>
                                </div>
                            </Tab>
                            <Tab eventKey="wishlist" title="Wishlist">
                                <div className="container m-auto row row-cols-lg-2 row-cols-md-2 row-cols-1 g-4">
                                    <div className="col">
                                        <div className="card h-100 rounded-0 wishlistCardsCards">
                                            <img src="/img/Homepage/RingTS.png" className="rounded-0 card-img-top wishlistCardposition" alt="..."/>
                                            <img src="/img/WishList/Delete.png" alt="" className="wishlistDeleteBtn"/>
                                            <div className="card-footer wishlistCardContent">
                                                <h5 className="text-dark">The Merrie Gold Ring</h5>
                                                <p className="text-muted text-center m-0">Metal: 14k Yellow Gold</p>
                                                <h5 className="wishlistCarditemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card h-100 rounded-0 wishlistCardsCards">
                                            <img src="/img/Homepage/BangleTS.png" className="rounded-0 card-img-top wishlistCardposition" alt="..."/>
                                            <img src="/img/WishList/Delete.png" alt="" className="wishlistDeleteBtn"/>
                                            <div className="card-footer wishlistCardContent">
                                                <h5 className="text-dark">The Merrie Gold Bangles</h5>
                                                <p className="text-muted text-center m-0">Metal: 14k Yellow Gold</p>
                                                <h5 className="wishlistCarditemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="order" title="Order History">
                                <div className='infoContainer'>
                                    <p>
                                        Order History
                                    </p>
                                </div>
                            </Tab>
                        </Tabs>

                    </div>

                    <div className='col-lg-5 accountCtaImg'>
                        <img src="/img/MyAccount/CTA.png" alt="" />
                        <a href='/' className='accountCtaBtn btn' >SHOP NOW</a>
                    </div>

                </div>


            </div>
            
        </>
  );
};
