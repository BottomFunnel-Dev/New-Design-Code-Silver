import React from 'react';
import './WishListCard.css';


export const WishListCard = () => {
  return (
        <>
            <div className='container my-5'>
                <div className='wishListHeading'>
                    <h5> <span className='wishListSubHeading'> <a href="/">Home</a></span> | WishList </h5>
                    <hr className='custom-hr'/>
                </div>
                
                <div className="my-4">
           
                    <div className="container m-auto row row-cols-lg-4 row-cols-md-2 row-cols-1 g-4">
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
                        <div className="col">
                            <div className="card h-100 rounded-0 wishlistCardsCards">
                                <img src="/img/Homepage/EarringTS.png" className="rounded-0 card-img-top wishlistCardposition" alt="..."/>
                                <img src="/img/WishList/Delete.png" alt="" className="wishlistDeleteBtn"/>
                                <div className="card-footer wishlistCardContent">
                                    <h5 className="text-dark">The Merrie Gold Earrings</h5>
                                    <p className="text-muted text-center m-0">Metal: 14k Yellow Gold</p>
                                    <h5 className="wishlistCarditemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 rounded-0 wishlistCardsCards">
                                <img src="/img/Homepage/Earring2TS.png" className="card-img-top rounded-0 wishlistCardposition" alt="..."/>
                                <img src="/img/WishList/Delete.png" alt="" className="wishlistDeleteBtn"/>
                                <div className="card-footer wishlistCardContent">
                                    <h5 className="text-dark">The Merrie Gold Earrings</h5>
                                    <p className="text-muted text-center m-0">Metal: 14k Yellow Gold</p>
                                    <h5 className="wishlistCarditemscolor">10,912 <strike className="text-muted">10,912</strike></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </>
  );
};
