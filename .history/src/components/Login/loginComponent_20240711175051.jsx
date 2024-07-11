import React from 'react';
import './loginComponent.css';


export const LoginComponent = () => {
  return (
        <>
            <div className='container py-5'>

                <div className="jewelleryMakeoversHeading">
                    <img src="/img/Homepage/PetalLeft.png" alt="" />
                    <h2 className="mx-2">Log in</h2>
                    <img src="/img/Homepage/PetalRight.png" alt="" />
                </div>

                <div className='formContainer'>
                    <input type="text" placeholder='Erter your rrobile number email' />
                </div>

            </div>
        </>
  );
};
