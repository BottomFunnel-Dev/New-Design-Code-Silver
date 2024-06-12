import React from 'react';
import './CheckOut.css';
import { Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Checkut = () => {
  return (
        <>
            <div className='container my-5'>
                <div className='accountLinkHeading'>
                    <h5> <span className='accountSubHeading'> <a href="/">Home</a></span> | CheckOut </h5>
                    <hr className='custom-hr'/>
                </div>
               
                 
                <div className='container row my-4'>

                    <div className='col-lg-7 border border-dark'>

                    </div>

                    <div className='col-lg-5 border border-dark checkoutFinalBox'>
                        
                    </div>

                </div>


            </div>
            
        </>
  );
};
