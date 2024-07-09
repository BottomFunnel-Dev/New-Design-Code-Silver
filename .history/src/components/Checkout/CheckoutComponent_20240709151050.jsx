import React, { useState } from 'react';
import './CheckoutComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const CheckoutComponent = () => {
  // Initial state with a sample product
  const [items, setItems] = useState([
    {
      id: 1,
      imgSrc: "/img/Checkout/ring.png",
      title: "The Merrie Gold Ring",
      weight: "2.158g",
      size: "19.10 MM",
      price: 10912,
      returnPolicy: "14 Days",
      deliveryDate: "18 April - 20 April"
    }
  ]);

  // Function to handle item deletion
  const handleDelete = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  // Function to handle adding to wishlist
  const handleAddToWishlist = (item) => {
    alert(`${item.title} has been added to the wishlist.`);
    // Implement your add to wishlist logic here
  };

  return (
    <>
      <div className='container my-5'>
        <div className='accountLinkHeading'>
          <h5>
            <span className='accountSubHeading'>
              <a href="/">Home</a>
            </span> | Checkout
          </h5>
          <hr className='custom-hr'/>
        </div>
        <div className='container p-0 mt-3 checkoutMainBox'>
          {items.map((item) => (
            <div key={item.id} className='col-lg-7 text-start checkoutDataContainer'>
              <div className='col-lg-4 '>
                <img src={item.imgSrc} alt="" className='w-100 p-2'/>
              </div>
              <div className='col-lg-8 px-3'>
                <div className='d-flex justify-content-between py-2'>
                  <h5 className='checkoutheadingColor m-0'>{item.title}</h5>
                  <div className='mx-2'>
                    <img 
                      src="/img/Checkout/favorite.png" 
                      alt="Wishlist" 
                      className='checkoutIconSizes' 
                      onClick={() => handleAddToWishlist(item)}
                    />
                    <img 
                      src="/img/Checkout/delete.png" 
                      alt="Delete" 
                      className='checkoutIconSizes mx-2' 
                      onClick={() => handleDelete(item.id)} 
                    />
                  </div>
                </div>
                <p className='checkoutSubHeading'>Weight - {item.weight} | Size - {item.size}</p>
                <select id="ring-size" name="ring-size" className='checkoutSelectSize p-1'>
                  <option value="4">Size</option>
                  <option value="4.5">Size 4.5</option>
                  <option value="5">Size 5</option>
                  <option value="5.5">Size 5.5</option>
                  <option value="6">Size 6</option>
                </select>
                <h3 className='checkoutheadingColor mt-3'>₹{item.price}</h3>
                <p className='checkoutSubHeading m-0'><strong>{item.returnPolicy}</strong> Return Available</p>
                <p className='checkoutSubHeading'>
                  <img src="/img/Checkout/check_circle.png" alt="" className='checkoutCheckIcon'/> 
                  Delivery between <strong>{item.deliveryDate}</strong>
                </p>
              </div>
            </div>
          ))}
          <div className='col-lg-5 checkoutDetails p-4'>
            <h5 className='text-start checkoutheadingColor'>ORDER SUMMARY</h5>
            <div className='d-flex justify-content-between mt-4'>
              <p className='checkoutSubHeading m-0'>Sub Total</p>
              <p className='checkoutFontColor m-0'>₹{items.reduce((acc, item) => acc + item.price, 0)}</p>
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
              <h5 className='checkoutFontColor'>₹{items.reduce((acc, item) => acc + item.price, 0)}</h5>
            </div>
            <div className='checkoutPromoCodeBox mt-3'>
              <input type="text" placeholder='Enter Your Code'/>
              <button>APPLY</button>
            </div>
            <p className='checkoutFontColor'><a href="/"></a>View promo code</p>
            <button className='w-100 checkoutBuyButton mt-4'>BUY NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};
