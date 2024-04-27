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
                        If any discrepancies arise, we reserve the right to cancel orders for various reasons such as limited inventory, pricing errors, or inaccuracies in
                        product information. In some cases, we may also request additional information to process orders. Rest assured, we will notify you promptly if your
                        order is partially or fully canceled or if we require extra details to proceed.
                        <br />
                        You have the option to cancel your order before it is dispatched, and we will refund the amount using the same payment method within IO working
                        days. Please note that a pre-dispatch cancellation fee of 2% will apply, and the remaining 98% will be refunded to your account.
                        <br />
                        Cancellation is not permitted for customized jewelry products. Additionally, orders for Gold Coins, Gold articles and ICC Gold coins cannot be
                        canceled under any circumstances.
                        <br />
                        For Gold Jewelry orders placed after 17-Apr-2020, cancellation is not allowed. However, customers can opt for a different product of equal or higher
                        value.
                    </p>
                </div>

            </div>
        </>
  );
};
