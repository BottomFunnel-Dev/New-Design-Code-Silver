import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [wishListItems, setWishListItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToWishlist = (item) => {
    setWishListItems((prevItems) => [...prevItems, item]);
  };

  const removeFromWishlist = (id) => {
    setWishListItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    removeFromWishlist(item.id); // Remove item from wishlist after adding to cart
  };

  return (
    <CartContext.Provider value={{ wishListItems, cartItems, addToWishlist, removeFromWishlist, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
