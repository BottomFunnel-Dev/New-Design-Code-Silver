import React from 'react';
import './ContactUs.css';

export const ContactUs = () => {
  return (
        <>
            <div className='container my-5'>
                <div className='contactLinkHeading'>
                    <h5> <span className='contactSubHeading'> <a href="/">Home</a></span> | Contact Us </h5>
                    <hr className='custom-hr'/>
                </div>
                
                <div className='conatiner row'>
                    <div className='col-lg-6'>
                        
                        <div className="contactHeading">
                            <img src="/img/Homepage/PetalLeft.png" alt="" />
                            <h4 className="mx-2">Get in touch</h4>
                            <img src="/img/Homepage/PetalRight.png" alt="" />
                        </div>
                        
                        <form action="#" method="POST" className='mt-4'>
                            <div class="form-row">
                                <div class="form-group">
                                    <input type="text" id="firstName" name="firstName" required placeholder='First Name'/>
                                </div>
                                <div class="form-group">
                                    <input type="text" id="lastName" name="lastName" required placeholder='Last Name' />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <input type="tel" id="phone" name="phone" required placeholder='Phone Number' />
                                </div>
                                <div class="form-group">
                                    <input type="email" id="email" name="email" required placeholder='Email Id' />
                                </div>
                            </div>
                            <div class="form-group">
                                <textarea id="message" name="message" rows="4" required placeholder='Message'></textarea>
                            </div>
                            <div class="form-group ContactbuttonDiv">
                                <button type="submit">Send</button>
                            </div>
                        </form>

                    </div>
                    <div className='col-lg-6'>
                        <div className='supportBoxes d-flex mt-3'>
                            <div className='col-lg-1 px-4'>
                                <img src="/img/Contact/callbg.png" alt=""  className='my-4'/>
                            </div>
                            <div className='col-lg-11 py-4 px-4'>
                                <h5 className='text-start'>Phone support</h5>
                                <p className='m-0 ptagfontsize'>Phone number +45 53691550</p>
                                <p className='ptagfontsize'>The phones are open from 9am – 5pm. Time zone Glitter City (GMT+2)</p>
                            </div>
                        </div>

                        <div className='supportBoxes d-flex mt-3'>
                            <div className='col-lg-1 px-4'>
                                <img src="/img/Contact/mailbg.png" alt=""  className='my-4'/>
                            </div>
                            <div className='col-lg-11 py-4 px-4'>
                                <h5 className='text-start'>Email support</h5>
                                <p className='m-0 ptagfontsize'>E-mail us at customercare@thelotusjeweller.com</p>
                                <p className='ptagfontsize'>We aim to answer you as soon as possible and always within 48 hours</p>
                            </div>
                        </div>

                        <div className='supportBoxes d-flex mt-3'>
                            <div className='col-lg-1 px-4'>
                                <img src="/img/Contact/loactionbg.png" alt=""  className='my-4'/>
                            </div>
                            <div className='col-lg-11 py-4 px-4'>
                                <h5 className='text-start'>Location</h5>
                                <p className='m-0 ptagfontsize'>122, Street</p>
                                <p className='ptagfontsize'>srimrr.nna Glitter Cit" ccorty. ZO 98765</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                 
                


            </div>
            
        </>
  );
};
