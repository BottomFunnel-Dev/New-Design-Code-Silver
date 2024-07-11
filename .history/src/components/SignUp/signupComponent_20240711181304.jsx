import React from 'react';
import './signupComponent.css';


export const SignupComponent = () => {
  return (
        <>
            <div className='container py-5 my-5'>

                <div className="signupHeading">
                    <img src="/img/Homepage/PetalLeft.png" alt="" />
                    <h2 className="mx-2">Sign Up</h2>
                    <img src="/img/Homepage/PetalRight.png" alt="" />
                </div>

                <div className='formContainerSignup'>
                    <div>
                        <input type="text" />
                    </div>
                    <button>Sign Up</button>
                    <p>
                     Already have an account <a href="/login">Login Here!</a>
                    </p>
                </div>

            </div>
        </>
  );
};
