import React from 'react';
import './CustomerReview.css';


export const CustomerReview = () => {


  return (
        <div className="mainContainerCR">
            <div className="customerReviewHeading">
                <img src="/img/Homepage/PetalLeft.png" alt="" />
                <h2 className="mx-2">Customer Reviews</h2>
                <img src="/img/Homepage/PetalRight.png" alt="" />
            </div>
           
            <div className="container mt-4">

                <div className="d-flex">
                    <div className="col-lg-3">
                        <div className="container d-flex row m-auto">
                            <div className="col-lg-6 border border-dark d-flex brownBackground crRatings rounded">
                                <h2 className="pinkFontColor">
                                   4.5/
                                </h2>
                                <h4 className="pinkFontColor">
                                    5
                                </h4>
                            </div>
                            <div className="col-lg-6 crReviewBox d-flex align-items-center justify-content-center flex-column">
                                <h4 className="m-0">
                                    Excellent
                                </h4>
                                <p className="m-0">
                                (20 Reviews)
                                </p>
                            </div>
                        </div>
                        <hr />
                        
                        <div className='container'>
                            <label for="file" className='progressbarHeading'>Downloading progress</label>
                            <div className='d-flex '>
                                <progress id="file" value="67" max="100">  </progress>
                                <p className='mx-1 progressbarResult'>4.7</p>
                            </div>
                        </div>

                        <div className='container'>
                            <label for="file" className='progressbarHeading'>Design</label>
                            <div className='d-flex '>
                                <progress id="file" value="67" max="100">  </progress>
                                <p className='mx-1 progressbarResult'>4.7</p>
                            </div>
                        </div>

                        <div className='container'>
                            <label for="file" className='progressbarHeading'>purity</label>
                            <div className='d-flex '>
                                <progress id="file" value="67" max="100">  </progress>
                                <p className='mx-1 progressbarResult'>4.7</p>
                            </div>
                        </div>

                        <div className='container'>
                            <label for="file" className='progressbarHeading'>Delivery</label>
                            <div className='d-flex '>
                                <progress id="file" value="67" max="100">  </progress>
                                <p className='mx-1 progressbarResult'>4.7</p>
                            </div>
                        </div>
                        
                       

                        
                    </div>

                    <div className="col-lg-9">
                         <textarea id="w3review" name="w3review" rows="10" cols="123" placeholder='Write Your Review here' className='reviewBox p-3'>

                         </textarea>

                         <div className='reviewButtonDiv'>
                            <button className='submitReviewButton'>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

                <div className='container d-flex reviewBoxContainer'>
                   
                    <div className="review-card my-4">
                        <div className="user-info">
                            <img src="/img/DescriptionPage/Profile1.png" alt="User Image" className="user-image" />
                            <div className="user-details">
                                <h5 className="user-name">Sarah M.</h5>
                                <p>5 months ago</p>
                            </div>
                        </div>

                        <div className="review-content">
                            <div className="user-rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9734;</span>
                            </div>
                            <p>"I was looking for a unique necklace to complete my latest collection, and Lotus Jewellery did not disappoint! The craftsmanship is incredible, and the piece truly elevates any outfit. I'll definitely be back for more statement pieces."</p>
                        </div>
                    </div>

                    <div className="review-card my-4">
                        <div className="user-info">
                            <img src="/img/DescriptionPage/Profile3.png" alt="User Image" className="user-image" />
                            <div className="user-details">
                                <h5 className="user-name">Emily C.</h5>
                                <p>5 months ago</p>
                            </div>
                        </div>

                        <div className="review-content">
                            <div className="user-rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9734;</span>
                            </div>
                            <p>"Lotus Jewelry is my go-to for affordable gifts! Their jewelry is always on-trend and stylish, without costing a fortune. My friends rave about the pieces I give them, and it feels good knowing I found something special without breaking the bank."</p>
                        </div>
                    </div>

                    <div className="review-card my-4">
                        <div className="user-info">
                            <img src="/img/DescriptionPage/Profile2.png" alt="User Image" className="user-image" />
                            <div className="user-details">
                                <h5 className="user-name">John Doe</h5>
                                <p>5 months ago</p>
                            </div>
                        </div>

                        <div className="review-content">
                            <div className="user-rating">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9734;</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>

                </div>
                
                <a href="" className='viewAllButtonCR'>
                    <p className='m-0 px-3'>View All Review</p>
                </a>
                

            </div>

        </div>
  );
};
