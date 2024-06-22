import React from 'react';
import { CartProvider } from './context/CartContext';
import { ListData } from './components/ListingPage/ListData/ListData';
import { WishListCard } from './components/WishList/WishListCard';

function App() {
  return (
    <CartProvider>
      <ListData />
      <WishListCard />
    </CartProvider>
  );
}

export default App;
