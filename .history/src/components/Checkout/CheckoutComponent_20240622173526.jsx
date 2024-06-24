import React from 'react';
import './CheckoutComponent.css';
import { useCart } from '../../context/CartContext';

export const CheckoutComponent = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <>
      <div className='container my-5'>
        <div className='accountLinkHeading'>
          <h5>
            <span className='accountSubHeading'>
              <a href="/">Home</a>
            </span>
            | Checkout
          </h5>
          <hr className='custom-hr' />
        </div>

        {cartItems.map(item => (
          <div key={item.id} className='container p-0 mt-3 checkoutMainBox'>
            <div className='col-lg-7 text-start checkoutDataContainer'>
              <div className='col-lg-4 '>
                <img src={item.image} alt="" className='w-100 p-2' />
              </div>
              <div className='col-lg-8 px-3'>
                <div className='d-flex justify-content-between py-2'>
                  <h5 className='checkoutheadingColor m-0'>{item.name}</h5>
                  <div className='mx-2'>
                    <img
                      src="/img/Checkout/favorite.png"
                      alt=""
                      className='checkoutIconSizes'
                    />
                    <img
                      src="/img/Checkout/delete.png"
                      alt=""
                      className='checkoutIconSizes mx-2'
                      onClick={() => removeFromCart(item.id)}
                    />
                  </div>
                </div>
                <p className='checkoutSubHeading'>Weight - 2.158g | Size - 19.10 MM</p>
                <select id="ring-size" name="ring-size" className='checkoutSelectSize p-1'>
                  <option value="4">Size</option>
                  <option value="4.5">Size 4.5</option>
                  <option value="5">Size 5</option>
                  <option value="5.5">Size 5.5</option>
                  <option value="6">Size 6</option>
                </select>
                <h3 className='checkoutheadingColor mt-3'>₹{item.price}</h3>
                <p className='checkoutSubHeading m-0'>
                  <strong>14 Days</strong> Return Available
                </p>
                <p className='checkoutSubHeading'>
                  <img
                    src="/img/Checkout/check_circle.png"
                    alt=""
                    className='checkoutCheckIcon'
                  /> Delivery between <strong>18 April - 20 April</strong>
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className='col-lg-5 checkoutDetails p-4'>
          <h5 className='text-start checkoutheadingColor'>ORDER SUMMARY</h5>
          <div className='d-flex justify-content-between mt-4'>
            <p className='checkoutSubHeading m-0'>Sub Total</p>
            <p className='checkoutFontColor m-0'>₹{cartItems.reduce((total, item) => total + item.price, 0)}</p>
          </div>
          <div className='d-flex justify-content-between'>
            <p className='checkoutSubHeading m-0'>Discount</p>
            <p className='checkoutFontColor m-0'>-₹0</p>
          </div>
          <div className='d-flex justify-content-between'>
            <p className='checkoutSubHeading'>Delivery Charge</p>
            <p className='checkoutSubHeading'>FREE</p>
          </div>
          <div className='d-flex justify-content-between'>
            <h5 className='checkoutFontColor'>Total</h5>
            <h5 className='checkoutFontColor'>₹{cartItems.reduce((total, item) => total + item.price, 0)}</h5>
          </div>

          <div className='checkoutPromoCodeBox mt-3'>
            <input type="text" placeholder='Enter Your Code' />
            <button>APPLY</button>
          </div>
          <p className='checkoutFontColor'>View promo code</p>
          <button className='w-100 checkoutBuyButton mt-4'>BUY NOW</button>
        </div>
      </div>
    </>
  );
};
