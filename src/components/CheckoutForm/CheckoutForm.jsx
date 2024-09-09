import React, { useState } from 'react';
import './CheckoutForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export const CheckoutForm = () => {

  const navigate = useNavigate(); // React Router hook to navigate to another page

  const handlePlaceOrder = () => {
    alert('Order placed successfully'); // Show the alert
    navigate('/'); // Redirect to home page
  };

  return (
    <>
      <div className='container my-5'>
        <div className='accountLinkHeading'>
          <h5>
            <span className='accountSubHeading'>
              <a href="/">Home</a>
            </span> | Checkout
          </h5>
          <hr className='custom-hr' />
        </div>
        <div className='container p-0 mt-3 checkoutMainBox'>
          <div className='col-lg-7'>
            <div className="col-xl-11 col-lg-12 col-md-12">
              <div className="div-title d-flex align-items-center mb-3">
                <h4> Personal Details</h4>
              </div>
              <div className="card mb-3 text-start">
                <div className="card-body">
                  <div className="row pt-2 pb-2">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Enter Country Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Country"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Email ID</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="xyz@gmail.com"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Gender</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Gender"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-title d-flex align-items-center mb-3 pt-4">
                <h4> Credit/Debit Card </h4>
              </div>
              <div className="card mb-3" >
                <div className="card-body">
                  <div className="row pt-2 pb-2 text-start">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label"> Card Holder Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Card Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Month</label>
                        <input type="text" className="form-control" placeholder="Month" />
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Year</label>
                        <input type="text" className="form-control" placeholder="Year" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">CVV</label>
                        <input type="text" className="form-control" placeholder="***" />
                      </div>
                    </div>
                    <div className="modal-flex-first">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="savepassword"
                          defaultValue="option1"
                        />
                        <label className="form-check-label" htmlFor="savepassword">
                          {" "}
                          I read and accept all Terms &amp; conditions
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='col-lg-5 checkoutDetails p-4 mt-3'>
            <h5 className='text-start checkoutheadingColor'>ORDER SUMMARY</h5>
            <div className='d-flex justify-content-between mt-4'>
              <p className='checkoutSubHeading m-0'>Sub Total</p>
              <p className='checkoutFontColor m-0'>₹10912</p>
            </div>
            <div className='d-flex justify-content-between'>
              <p className='checkoutSubHeading m-0'>Discount</p>
              <p className='checkoutFontColor m-0'>-₹0</p>
            </div>
            <div className='d-flex justify-content-between'>
              <p className='checkoutSubHeading'>Delivery Charge</p>
              <p className='checkoutSubHeading'>FREE</p>
            </div>
            <div className='d-flex justify-content-between'>
              <h5 className='checkoutFontColor'>Total</h5>
              <h5 className='checkoutFontColor'>₹10912</h5>
            </div>
            <div className='checkoutPromoCodeBox mt-3'>
              <input type="text" placeholder='Enter Your Code' />
              <button>APPLY</button>
            </div>
            <p className='checkoutFontColor'><a href="/">View promo code</a></p>
            <button className='w-100 checkoutBuyButton mt-4' onClick={handlePlaceOrder}>
              Place order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
