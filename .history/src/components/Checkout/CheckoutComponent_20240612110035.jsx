import React from 'react';
import './CheckoutComponent.css';
import { Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Border } from 'react-bootstrap-icons';

export const CheckoutComponent = () => {
  return (
        <>
            <div className='container my-5'>
                <div className='accountLinkHeading'>
                    <h5> <span className='accountSubHeading'> <a href="/">Home</a></span> | Checkout </h5>
                    <hr className='custom-hr'/>
                </div>
                
            
                <div className='container d-flex p-0'>

                    <div className='col-lg-7 border border-dark' style={{height:"150px"}}>

                        
                    </div>

                    <div className='col-lg-5 border border-dark ' style={{height:"150px"}}>
                        
                    </div>

                </div>


            </div>
            
        </>
  );
};
