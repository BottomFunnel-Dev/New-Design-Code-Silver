import React from 'react';
import './Cancellation.css';


export const Cancellation = () => {
  return (
        <>
            <div className='container'>

                <div className="cancellationHeading">
                    <img src="/img/Homepage/PetalLeft.png" alt="" />
                    <h2 className="mx-2">Cancellation Policy</h2>
                    <img src="/img/Homepage/PetalRight.png" alt="" />
                </div>

                <div className='container'>
                    <p className='cancellationPolicyContent'>
                    We strive to fulfill all orders accurately and efficiently. However, there may be times when we need to cancel an order due to:
                    <br />

                    <ul>
                        <li>Limited inventory</li>
                        <li>Pricing errors</li>
                        <li>Inaccurate product information</li>
                    </ul>

                    <br />

                    In these cases, we will notify you promptly and offer a full refund using your original payment method.
                    <br />

                    Here's what you need to know about canceling your order:
                    <br />
                    <ul>
                        <li>
                        You can cancel your order before it ships for a full refund, minus a 2% pre-dispatch processing fee. We'll process the remaining 98% within 10 business days.
                        </li>
                        <li>
                        Customized jewelry, Gold Coins, Gold articles, and ICC Gold Coins cannot be cancelled.
                        </li>
                        <li>
                        Orders for Gold Jewelry placed after April 17th, 2020 cannot be cancelled, but you can exchange it for a different item of equal or higher value.
                        </li>
                    </ul>
                    <br />
                    We understand that unexpected situations arise, so please feel free to contact us if you have any questions about your order or our cancellation policy.

                    </p>
                </div>

            </div>
        </>
  );
};
