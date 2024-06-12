import React from 'react';
import './CheckOut.css';
import { Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const CheckOut = () => {
  return (
        <>
            <div className='container my-5'>
                <div className='accountLinkHeading'>
                    <h5> <span className='accountSubHeading'> <a href="/">Home</a></span> | CheckOut </h5>
                    <hr className='custom-hr'/>
                </div>
               
                 
                <div className='container row my-4 accountMainContainer m-auto'>

                    <div className='col-lg-7'>

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
