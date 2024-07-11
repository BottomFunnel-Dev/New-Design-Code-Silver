import React from 'react';
import './signupComponent.css';


export const SignupComponent = () => {
  return (
        <>
            <div className='container py-5 my-5'>

                <div className="loginHeading">
                    <img src="/img/Homepage/PetalLeft.png" alt="" />
                    <h2 className="mx-2">Log in</h2>
                    <img src="/img/Homepage/PetalRight.png" alt="" />
                </div>

                <div className='formContainer'>
                    <input type="text" placeholder='Enter your mobile number email' />
                    <button>Log IN</button>
                    <p>
                    New to Lotus Jeweler? <a href="/sign-up">Create an account</a>
                    </p>
                </div>

            </div>
        </>
  );
};
