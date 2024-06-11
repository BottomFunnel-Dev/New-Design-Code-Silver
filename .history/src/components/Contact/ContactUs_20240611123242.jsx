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
                    <div className='col-lg-6 border border-dark'>
                        <div className='supportBoxes d-flex'>
                            <div className='col-lg-1 border border-dark'>
                                <img src="/img/Contact/call.png" alt="" />
                            </div>
                            <div className='col-lg-11 border boder-dark' style={{hei}}>

                            </div>
                        </div>
                    </div>
                </div>
                
                 
                


            </div>
            
        </>
  );
};
