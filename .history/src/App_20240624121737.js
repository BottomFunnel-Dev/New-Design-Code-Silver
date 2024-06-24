import React from 'react';
import { WishlistProvider } from './WishlistContext';

const App = () => {
  return (
    <WishlistProvider>
      <TopSellers />
      <WishListCard />
    </WishlistProvider>
  );
};

export default App;